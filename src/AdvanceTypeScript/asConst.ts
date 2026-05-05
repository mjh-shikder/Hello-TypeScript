// ? As Const Assertion

type UserRoles = "Admin" | "Editor" | "Viewer"; //* Regular Type Declartion

//* enum UserRoles2 {
//*   Admin = "Admin",
//*   Editor = "Editor",
//*   Viewer = "Viewer",
//* }

const UserRoles2 = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
} as const;
//? as const use korar karone eitar value gual Readonly hoye jabe.

/*
 * 2 ta jinis ei khane kaje lagbe
* 1 typeof oparator
* 2 keyof oparator
* 
?typeof UserRoles2: 
* 
* type UserRoles2{
*  Admin: "Admin",
*  Editor: "Editor",
*  Viewer: "Viewer",
* }
* 
? Keyof Oparetor key gula ke niye union type string Litaral toiri kore 
* keyof UserRoles2{
* 'Admin' | 'Editor' | 'Viewer'
* }
* 
* 
 */


const canEdit = (role: UserRoles) => {
  if (role === "Admin" || role === "Editor") {
    return true;
  } else return false;
};

//? Function with as const 
const canEdit2 = (role: keyof typeof UserRoles2) => {
  if (role === UserRoles2.Admin|| role === UserRoles2.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit("Admin");
const isEditPermissable2 = canEdit2(UserRoles2.Editor);

console.log(isEditPermissable);
console.log(isEditPermissable2);

// ? Ar ekta senario
const UserRoles3 = {
    Admin: 'ADMIN',
    Editor: 'EDITOR',
    Viewer: 'VIEWER',
}as const


const canEdit3 = (role: (typeof UserRoles3[keyof typeof UserRoles3])) => {
  if (role === UserRoles3.Admin|| role === UserRoles3.Editor) {
    return true;
  } else return false;
};

const isEditPermissable3 = canEdit3(UserRoles3.Admin);

console.log(isEditPermissable3);
