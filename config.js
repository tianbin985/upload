const API_CONFIG = {
    baseURL: 'http://110.40.198.17:8080', // 默认接口地址
    getBaseURL() {
        return this.baseURL;
    },
    setBaseURL(url) {
        this.baseURL = url;
    }
};
