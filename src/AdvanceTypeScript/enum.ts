// ? enum
// ? set of fixed string leteral ek jaigay rakhe
// ? Enum is not Recomanded by Senior Developers cause it increase the js bundle size on large scale projects. 

type UserRoles = 'Admin' | 'Editor' | 'Viewer'; //* Regular Type Declartion

enum UserRoles2 {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}

const canEdit = (role: UserRoles) => {
    if (role === 'Admin' || role === "Editor") {
        return true;
    } else return false;
}

//? Function with Enum
const canEdit2 = (role: UserRoles2) => {
    if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
        return true;
    } else return false;
}


const isEditPermissable = canEdit('Admin')
const isEditPermissable2 = canEdit(UserRoles2.Editor)

console.log(isEditPermissable);
console.log(isEditPermissable2);
