const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm4hufs/",
            name: "ssm4hufs",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm4hufs/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网络音乐系统"
        } 
    }
}
export default base
