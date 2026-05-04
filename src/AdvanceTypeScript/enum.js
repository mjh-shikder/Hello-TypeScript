"use strict";
// ? enum
// ? set of fixed string leteral ek jaigay rakhe
var UserRoles2;
(function (UserRoles2) {
    UserRoles2["Admin"] = "Admin";
    UserRoles2["Editor"] = "Editor";
    UserRoles2["Viewer"] = "Viewer";
})(UserRoles2 || (UserRoles2 = {}));
const canEdit = (role) => {
    if (role === 'Admin' || role === "Editor") {
        return true;
    }
    else
        return false;
};
//? Function with Enum
const canEdit2 = (role) => {
    if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit('Admin');
const isEditPermissable2 = canEdit(UserRoles2.Editor);
console.log(isEditPermissable);
console.log(isEditPermissable2);
