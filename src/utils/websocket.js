class MyWebSocket {
    constructor(url) {
      this.url = url;
      this.listeners = {};
      this.socket = null;
      this.heartbeatTimer = null;
      this.reconnectTimer = null;
      this.connected = false;
      this.connect();
    }
  
    connect() {
      if (this.connected) {
        return;
      }
  
      this.socket = new WebSocket(this.url);
  
      this.socket.addEventListener('open', () => {
        // console.log('WebSocket 连接成功！');
        this.connected = true;
  
        // 开启心跳包
        this.startHeartbeat();
  
        // 触发 connect 事件
        this.emit('connect');
      });
  
      this.socket.addEventListener('message', (event) => {
        // console.log('接收消息：',event.data);
        const message = JSON.parse(event.data);
        this.emit('message',message);
      });
  
      this.socket.addEventListener('error', (error) => {
        console.error('WebSocket 发生错误:', error);
        this.handleError(error);
      });
  
      this.socket.addEventListener('close', () => {
        // console.log('WebSocket 连接关闭！');
        this.connected = false;
  
        // 停止心跳包
        this.stopHeartbeat();
  
        // 触发 disconnect 事件
        this.emit('disconnect');
  
        // 尝试重连
        this.reconnect();
      });
    }
  
    reconnect() {
      if (!this.reconnectTimer) {
        // console.log('WebSocket 重连中...');
        // 5秒后尝试重新连接
        this.reconnectTimer = setTimeout(() => {
          this.connect();
          this.reconnectTimer = null;
        }, 5000);
      }
    }
  
    startHeartbeat() {
      if (!this.heartbeatTimer) {
        // console.log('WebSocket heartbeat started');
        // 每30秒发送心跳包
        this.heartbeatTimer = setInterval(() => {
          this.send('');
        }, 30000);
      }
    }
  
    stopHeartbeat() {
      if (this.heartbeatTimer) {
        // console.log('WebSocket heartbeat stopped');
        clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = null;
      }
    }
  
    send(data) {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(data));
      } else {
        console.error('WebSocket is not connected, failed to send message:', data);
      }
    }
  
    on(event, listener) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }
  
    emit(event, data) {
      const listeners = this.listeners[event];
      if (listeners) {
        listeners.forEach((listener) => {
          listener(data);
        });
      }
    }
  
    handleError(error) {
      this.emit('error', error.message || 'WebSocket error');
    }
  
    close() {
      this.socket.close();
    }
  }
export default MyWebSocket