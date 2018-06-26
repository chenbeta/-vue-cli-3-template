import { Message } from 'element-ui';

export default {
  msg: {
    //消息提示
    error: (str, duration = 2000, onClose = () => {}) => {
      Message({
        message: str,
        type: 'error',
        duration: duration,
        onClose: onClose
      });
    },
    success: (str, duration = 2000, onClose = () => {}) => {
      Message({
        message: str,
        type: 'success',
        duration: duration,
        onClose: onClose
      });
    }
  }
};
