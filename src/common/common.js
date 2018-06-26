export default {
  msg: {
    //消息提示
    error: (str, duration = 2, onClose = () => {}) => {
      this.$message({
        message: str,
        type: 'error',
        duration: duration,
        onClose: onClose
      });
    },
    success: (str, duration = 2, onClose = () => {}) => {
      this.$message({
        message: str,
        type: 'success',
        duration: duration,
        onClose: onClose
      });
    }
  }
};
