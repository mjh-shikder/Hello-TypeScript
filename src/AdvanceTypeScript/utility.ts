// ? Utility type

type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
}

// ? Regular way
type ProductSummary = {
    id: number;
    name: string;
    price: number;
}

// ? Smart way
// * Eitar moddhe type er kon kon property gula dorkar oigula pick korte hobe. 
type SelectedItemProduct = Pick<Product, 'id' | 'name' | 'price'>;

// * Eitar moddhe kono typer kon kon property gula bad dibo oigula type korte hobe. 
type MinimizedProduct = Omit<Product, 'color' | 'stock'>;

// * Required kono typer moddhe optiola soho sob kichu Requried koira dey
type RequredProduct = Required<Product>;

// * Partial sob gula type ke Optilan kore dey. 
type OptilaProduct = Partial<Product>;

// * Readonly sob gula property ke Readonly kore dey
type ReadonlyProduct = Readonly<Product>;

// just ekta normal object 
const product2 = {
    id: 222,
    name: 'mouse',
    price: '20',
}

// * jodi kokhono ekta empty object define korte hoy tahole 
//? eikhane Recode diya ei tuk nischit kormal je bam pase r ta string e hobe but dan paser ta unknown.
const emptyObj: Record<string, unknown>= {}