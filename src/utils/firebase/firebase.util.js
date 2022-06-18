
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,doc,setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnyc4733O0_M8MCOzuvmWBuKgQ53TlI0o",
  authDomain: "ecommerce-1-8ab03.firebaseapp.com",
  projectId: "ecommerce-1-8ab03",
  storageBucket: "ecommerce-1-8ab03.appspot.com",
  messagingSenderId: "855474008134",
  appId: "1:855474008134:web:eed953b2c0993e9717da47"
};


//Inicializamos firebase
const firebaseApp= initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();


provider.setCustomParameters({
    prompt: 'select_account'
});

//Autenticacion
export const auth = getAuth();

//Que la autenticacion sea con google
export const signInWithGooglePopup=()=>{
    return signInWithPopup (auth, provider);
};

export const db= getFirestore();
//base datos
//Coleccion// es como una tabla de base de datos
//Coleccion usuarios 
export const crearDocumentoUsuarios = async(usuario, informacionAdicional) => {
  if(!usuario) return;
  //DocRef= Documento de Referencia
  const usuarioDocRef= doc(db, 'usuarios',usuario.uid);
  const usuarioSnapshot= await getDoc(usuarioDocRef);

  console.log(!usuarioSnapshot.exists());

  if (!usuarioSnapshot.exists()) {
    //Destructurar los datos de usuario
    const {displayNam: nombre, email}= usuario;
    //La fecha en que fue creado el usuario
    const fechaCreacion= new Date();
  
    try {
      setDoc(usuarioDocRef, {
        nombre,
        email,
        fechaCreacion,
        ...informacionAdicional,
  
      });
      // Si da error mandelo a consola
    } catch (error) {
      console.log(error);
      
    }
  }
  return usuarioDocRef;
 
};
//Funcion propia de Firestore para autenticarse con correo y contraseña
//Esta funcion la exportamos y importamos en el componente  FormularioRegistro
export const createUserWithEmailPasswordFirestore= async (email, password)=>{
    //Sino existe email o password salgase de la funcion
  if (!email || !password ) return;
  //retorneme la funcion cuando exista la contraseña, pasword
  return await createUserWithEmailAndPassword(auth,email,password);
};

//funcion para iniciar sesion
export const signInWithEmailPasswordFirestore= async (email, password)=>{
  //Sino existe email o password salgase de la funcion
if (!email || !password ) return;
//retorneme la funcion cuando exista la contraseña, pasword
return await signInWithEmailAndPassword(auth,email,password);
};