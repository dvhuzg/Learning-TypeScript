//hieu don gian la Generic se la khoi tao san cac ham voi cac kieu tham so dau vao, voi muc dich de dang cho viec tai su dung code.

function createPair<S,T>(v1:S, v2:T):[S,T]{
    return [v1,v2];
}
console.log(createPair<number, string>(1,'dohung'));