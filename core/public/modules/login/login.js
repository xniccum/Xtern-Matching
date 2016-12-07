
function setToken(token, type) {
    //localStorage.setItem('token', token);
    sessionStorage.setItem(type, token);
}

function getToken(tokenName) {
    return sessionStorage.getItem(tokenName);
}

function logout() {
    var tokens = ['auth', 'role', 'organization', 'company', 'jwtToken'];
    tokens.forEach(function(token){
        removeToken(token);
    });
}

function getJwtToken(){
    sessionStorage.getItem("auth");
}

function removeToken(token){
    sessionStorage.removeItem(token)
}

var isLoggedInTechPoint = function ($q) {
    var role = getToken("role");
    if (!role) {
        var errorObject = { code: 'NOT_AUTHENTICATED_TECHPOINT' };
        $q.reject(errorObject);
        return $q.reject(errorObject);
    }
    else if(role =="admin"){
        return;
    }
    else if (role == "TechPoint") {
        return;
    }
    else if(role == "Company"){
        var errorObject = { code: 'ALREADY_AUTHENTICATED_COMPANY' };
        return $q.reject(errorObject);
    }
    else if(role == "Instructor"){
        var errorObject = { code: 'ALREADY_AUTHENTICATED_INSTRUCTOR' }
        return $q.reject(errorObject);
    }
    else{
        var errorObject = { code: 'NOT_AUTHENTICATED_TECHPOINT' };
        return $q.reject(errorObject);
    }
};

var isLoggedInInstructor = function ($q) {
    var role = getToken("role");
    if (!role) {
        var errorObject = { code: 'NOT_AUTHENTICATED_INSTRUCTOR' };
        return $q.reject(errorObject);
    }
    else if(role =="admin"){
        return;
    }
    else if (role == "TechPoint") {
        var errorObject = { code: 'ALREADY_AUTHENTICATED_TECHPOINT' };
        return $q.reject(errorObject);      
    }
    else if(role == "Company"){
        var errorObject = { code: 'ALREADY_AUTHENTICATED_COMPANY' };
        return $q.reject(errorObject);        
    }
    else if(role == "Instructor"){
        return;      
    }
    else{
        var errorObject = { code: 'NOT_AUTHENTICATED_INSTRUCTOR' };
        return $q.reject(errorObject);
    }
};

var isLoggedInCompany = function ($q) {
    var role = getToken("role");
    if (!role) {
        var errorObject = { code: 'NOT_AUTHENTICATED_COMPANY' };
        return $q.reject(errorObject);

    }
    else if(role =="admin"){
        return;
    }
    else if (role == "TechPoint") {
        var errorObject = { code: 'ALREADY_AUTHENTICATED_TECHPOINT' };
        return $q.reject(errorObject);
    }
    else if(role == "Company"){
        return;
    }
    else if(role == "Instructor"){
        var errorObject = { code: 'ALREADY_AUTHENTICATED_INSTRUCTOR' };
        return $q.reject(errorObject);
    }
    else{
        var errorObject = { code: 'NOT_AUTHENTICATED_COMPANY' };
        return $q.reject(errorObject);
    }
};

var isLoggedIn = function ($q, code) {
    var role = getToken("role");
    if (!role) {
        return;
    }
    else if(role =="admin"){
        var errorObject = {code: code};
        return $q.reject(errorObject);
    }
    else if (role == "TechPoint") {
        var errorObject = { code: 'ALREADY_AUTHENTICATED_TECHPOINT' };
        return $q.reject(errorObject);   
    }
    else if(role == "Company"){
        var errorObject = { code: 'ALREADY_AUTHENTICATED_COMPANY' };
        return $q.reject(errorObject);        
    }
    else if(role == "Instructor"){
        var errorObject = { code: 'ALREADY_AUTHENTICATED_INSTRUCTOR' };
        return $q.reject(errorObject);        
    }
};