module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/common/variables.scss";
        `,
      },
    },
  },
};
