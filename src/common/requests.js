const BASEURL = 'http://127.0.0.1:8000/api/'

const requests = {
    tokenRefresh:BASEURL+"token/refresh/",
    login:BASEURL+"user/signin",
    getTasks:BASEURL+"tasks",
    getTasksCount:BASEURL+"tasks/get_task_stat_count",
    createTasks:BASEURL+"tasks/"
}

export default requests