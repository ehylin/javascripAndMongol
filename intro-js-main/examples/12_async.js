
const cargarDatos = () => {
  setTimeout(() => {
    return 'Datos cargados';
  }, 2000);
};
/*
let loading = true;

const datos = cargarDatos();
console.log(datos);

loading = false;
console.log(loading);
*/
// controlar la espera
// acceder al valor

/*
1. callback
2. Promesas
3. Async/await
*/

// callback
const cargarDatosCb = (cb) => {
  setTimeout(() => {
    cb('Datos cargados');
  }, 2000);
};

let loading = true;
// console.log(loading);
cargarDatosCb((data) => {
  // console.log(data);
  loading = false;
  // console.log(loading);
});

/*
const downloadUserData = (cb) => {
  setTimeout(() => {
    console.log('User data downloaded');
    let user = { name: 'test' };
    cb(null, user);
  }, 2000);
};

const processUserData = (cb) => {
  setTimeout(() => {
    console.log('User data processed');
    cb();
  }, 1000);
};

const displayUserDashboard = (cb) => {
  setTimeout(() => {
    console.log('User dashboard displayed');
    cb();
  }, 3000);
};

console.log('cargando....');
downloadUserData((error, user) => {
  processUserData(() => {
    displayUserDashboard(() => {
      console.log('Fin ya se ve el usuario por pantalla');
    });
  });
});
console.log(1 + 2);
*/
// Promises
const downloadUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('User data downloaded');
      let user = { name: 'test' };
      resolve(user);
    }, 2000);
  });
};

const processUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('User data processed');
      reject('Error :(');
    }, 1000);
  });
};

const displayUserDashboard = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('User dashboard displayed');
      resolve();
    }, 3000);
  });
};
/*
console.log('cargando....');
downloadUserData()
  .then((user) => {
    console.log(user);
    return processUserData();
  }).then(() => {
    return displayUserDashboard();
  }).then(() => {
    console.log('Fin, ya se ve el usuario por pantalla');
  }).catch((error) => {
    console.log('Catch????', error);
  }).finally(() => {
    console.log('Ejecutar siempre');
  });
*/
// async/await
const main = async () => {
  try {
    console.log('cargando...');
    // throw new Error('Error cargando la página');
    const user = await downloadUserData();
    console.log(user);
    await processUserData();
    await displayUserDashboard();
    console.log('Fin, ya se ve el usuario por pantalla');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Ejecutar siempre');
  }
};

main();
