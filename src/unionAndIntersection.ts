// ? Union |

type UserRole = 'admin' | 'user' 

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard'
    }
    else if (role === 'user') {
        return 'User Dashboard'
    }
    else {
        return 'Guest Dahsboard'
    }
        
}

console.log(getDashboard("admin"));


// ? Intersection  &

type Employee = {
    id: string,
    name: string, 
    phone: string,

}

type Manager = { 
    designation: string,
    teamSize: number,
}

type EmployeeManager = Employee & Manager

const josh: EmployeeManager = {
    id: '34',
    name: 'josh',
    phone: '345',
    designation: 'dhoinca',
    teamSize: 40
}


