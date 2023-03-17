// 项目中，大多数时候都会把请求的接口封装称api来调用
import service from "@/service";
import axios from "axios";

// 登陆
export function login(params){
    return service({
        method: 'post',
        url: '/hello-world-vue/user-info/login',
        data: params
    })
}

//学生列表查询接口
export function studentList(params){
    // let pageNo = params.pageNo;
    // let pageSize = params.pageSize;
    let url = createGetParamUrl(params);
    return service({
        method: 'get',
        url: `/hello-world-vue/user-info/studentList?${url}`
    })
}

export function deleteStudent(id){
    return service({
        method: 'delete',
        url: `/hello-world-vue/user-info/deleteStudent?id=${id}`
    })
}

export function getStudent(id){
    return service({
        method: 'get',
        url: `/hello-world-vue/user-info/getStudent?id=${id}`
    })
}

export function saveStudent(form){
    return service({
        method: 'post',
        url: '/hello-world-vue/user-info/saveStudent',
        data: form
    })
}

export function updateStudent(form){
    return service({
        method: 'post',
        url: '/hello-world-vue/user-info/updateStudent',
        data: form
    })
}

export function dataViewMapChina(){
    return axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
}

function createGetParamUrl(params){
    let url = []
    for(let key in params){
        let value = params[key];
        if(value != '' && value != undefined){
            url.push(`${key}=${value}`)
        }
    }
    return url.join("&")
}

