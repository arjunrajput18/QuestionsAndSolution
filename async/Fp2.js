// Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the emails of users on the DOM in ordered list. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const outputBox = document.querySelector("#output");
const fakeFetch1 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/post/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
            {
              email: "hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome",
            },
            {
              email: "ram99@gmail.com",
              commentBody: "Anyone from Vadodara here",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "No Commentes found.",
        });
      }
    }, 2000);
  });
};

// your code here

// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com
//Question 1
//promise method .then
// const outputBox = document.querySelector("#output");
// fakeFetch1("https://example.com/post/comments").then(
//   ({ status, message, data }) =>
//      {
//         // const a = `<ol>${data.map(
//         //     ({ email }) => `<li>${email}</li>`
//         //   ).join("")}</ol>`
//         //   console.log(a)

//       outputBox.innerHTML = `<ol>
//       ${data.map(({email})=>`<li>${email}</li>`).join("")}
//       </ol>`
//     })

//async await
// const outputBox = document.querySelector("#output");
// const getEmails = async () => {
//   try {
//     const { status, data, message } = await fakeFetch1(
//       "https://example.com/post/comments"
//     );

//     if (status === 200) {
//       outputBox.innerHTML = `<ol>
//   ${data.map(({ email }) => `<li>${email}</li>`).join("")}
//   </ol>`;
//     }
//   } catch ({ status, message }) {
//     outputBox.innerHTML = `status:${status} message: ${message}`;
//   }
// };

// getEmails();

const fakeFetch2 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No Users found.",
        });
      }
    }, 2000);
  });
};
// your code here
// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.

// fakeFetch2("https://example.com/winner-team").then(
// ({status,data:{data}})=>{
// if(status===200){
// outputBox.innerHTML=`Congratulation to the members of winning team ${data.map((ele)=>ele).join(", ")}, great work keep it up.`
// }}
// )

// const getWinners=async ()=>{

// try{
//     const {status,data:{data}}=await fakeFetch2("https://example.com/winner-team")
// if(status===200){
//     outputBox.innerHTML=`Congratulation to the members of winning team ${data.map((ele)=>ele).join(", ")}, great work keep it up.`
// }
// }catch({status,message}){
// outputBox.innerHTML=`status:${status} , message:${message}`
// }
// }

// getWinners()

// -------Question 3 Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};

// your code here

// Output on the DOM should be:
// Verified

//   fakeFetch3("https://example.com/login").then(
//     ({status,data:{auth}})=>{
//         if(status===200){
//             if(auth){
//                 outputBox.innerText= `verified`
//             }
//         }
//     }
//   ).catch(({status,message})=>
//   outputBox.innerText=`status: ${status} message: ${message}`
//   )

// const isAuthenticated=async ()=>{
//     try{
//         const {status,data:{auth}}=await fakeFetch3("https://example.com/login")
//         if(status===200){
//             if(auth){
//                 outputBox.innerText=`verified`
//         }
// }
//     }
//     catch({status,message}){
//         outputBox.innerText=`status:${status} message:${message}`
//     }

// }

// isAuthenticated()

// Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

// your code here

// Output on the DOM should be:
// Hello Kajal Kumari your order status is delivery pending.

// fakeFetch4("https://example.com/order/status/OR00A12")
//   .then(
//     ({
//       status,
//       data: {
//         order: { orderId, status: orderStatus, userName },
//       },
//     }) => {
//       if (status === 200) {
//         outputBox.innerHTML = `Hello ${userName} your order status is ${status}.`;
//       }
//     }
//   )
//   .catch(({ status, message }) => {
//     outputBox.innerHTML = `status:${status} message:${message}`;
//   });

// const orderMsg = async () => {
//   try {
//     const {
//       status,
//       data: {
//         order: { orderId, status: orderStatus, userName },
//       },
//     } = await fakeFetch4("https://example.com/order/status/OR00A12");

//     if (status === 200) {
//       outputBox.innerHTML = `Hello ${userName} your order status is ${status}`;
//     }
//   } catch ({ status, message }) {
//     outputBox.innerHTML = `status : ${status} message :${message}`;
//   }
// };

// orderMsg();

// Use this URL - https://example.com/photo to make a fake fetch call and show an image on the DOM using the photo link received in the response. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch5 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://source.unsplash.com/featured/300x201",
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

// your code here

//   fakeFetch5("https://example.com/photo").then(
//       ({status,data: {photo: { link }}})=>{
//         if(status===200){
//             outputBox.innerHTML=`<img src=${link}/>`
//         }
//     }
//   ).catch(({status,message})=>{

//   outputBox.innerHTML= ` status:${status} message:${message}`
// })

//   //
//   const imgDom = async () => {
//     try {
//       const {
//         status,
//         data: {
//           photo: { link }
//         }
//       } = await fakeFetch5("https://example.com/photo");

//       if (status === 200) {
//         outputBox.innerHTML = `<img src=${link}>`;
//       }
//     } catch ({ status, message }) {
//       outputBox.innerHTML = `status:${status} message: ${message}`;
//     }
//   };

//   imgDom();
// Output: an image on the DOM

//   Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch6 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};
// Your Code here

// Output on the DOM should be:
// Total: INR 2600

// fakeFetch6("https://example.com/api/productlist").then(
// ({status,message,data})=>{
//     if(status===200){
//         outputBox.innerText=`Total : INR ${data.reduce((acc,{price,quantity})=>acc+price*quantity,0)}`
//     }
// }
// ).catch(
//     ({status,message})=>{
//         outputBox.innerText=`status:${status} message:${message}`
//     }
// )

// const totalPrice=async ()=>{
//  try{ const {status,message,data}=await fakeFetch6("https://example.com/api/productlist")
//  if(status===200){
//      outputBox.innerText=`Total INR ${data.reduce((acc,{price,quantity})=>acc+price*quantity,0)}`
//  }}

//  catch({status,message}){
//     outputBox.innerText=`status :${status} message:${message}`
//  }

// }

// totalPrice()

// Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch7 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here

// Output on the DOM should be (in red color):
// Oops. Unexpected Error. Please try again.

//  fakeFetch7("https://example.com/api/users").then(
//     ({status,data:{message}})=>{
//         outputBox.innerText=`status:${status} message:${message}`
//     }
//  ).catch(
//     ({status,message})=>
//     {
//         // outputBox.style.color="red"
//         outputBox.innerHTML=`<p style="color:red">Oops. Unexpected Error. Please try again</p>`
//     }

//  )

// const showMsg = async () => {
//   try {
//     const {
//       status,
//       data: { message },
//     } = await fakeFetch7("https://example.com/api/users");
//     outputBox.innerHTML = `status:${status} message:${message}`;
//   } catch ({ message, status }) {
//     outputBox.innerHTML = `<p style="color:red">Oops. Unexpected Error. Please try again</p>`;
//   }
// };

// showMsg()

// Use this URL - https://example.com/api/allbooks to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Bad Request! Requested size too large.), as per the status received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.
const fakeFetch8 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allbooks") {
        reject({
          status: 400,
          message: "Bad Request",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here
// Output on the DOM should be:
// Bad Request! Requested size too large.

//   fakeFetch8("https://example.com/api/allbooks").then(
//     ({status,data:{message}})=>{
//         outputBox.innerText=`message ${message}`
//     }
//   ).catch(
// ({status,message})=>{
//     // console.log(message)
//     outputBox.innerText=`${message} size too large`
// }
//   )

// const showMsg1 = async () => {
//   try {
//     const {
//       status,
//       data: { message },
//     } = await fakeFetch8("https://example.com/api/allbooks");
//     outputBox.innerHTML = `message ${message}`;
//   }
//   catch ({ status, message }) {
//     // console.log(status);
//     if (status === 400) {
//       outputBox.innerHTML = `${message} size too large`;
//     }
//   }
// };

// showMsg1();

// Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the servershould be shown. Message should be only shown if the user is logged in. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch9 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(url === "https://example.com/welcome")) {
        reject({
          status: 511,
          message: "Network auth required",
        });
      } else {
        resolve({
          status: 200,
          data: {
            logged: true,
            // message:"hiii "
          },
        });
      }
    }, 2000);
  });
};

// your code here
// Output: As per the response from server

// fakeFetch9("https://example.com/welcome").then(
//   ({ status, data: { logged,message } }) => {
//     if (status === 200) {
//       if (logged) {
//         // if (message??undefined) {
//         //     outputBox.innerText = `you are logged IN`;
//         // } else {
//         //     outputBox.innerText = `message:- ${message}`;
//         // }
//     outputBox.innerHTML=message??"You are logged In"  //nullish collision
//     }
//     }
//   }
// ).catch(({ status, message }) => (output.innerText =` ${status} ${message}`));;

const showMsg3=async ()=>{
try{
    const {status,data:{logged,message}}= await fakeFetch9("https://example.com/welcome")
    if(status===200){
        if(logged){
            outputBox.innerHTML=message??"You are logged In"
        }
    }
} catch({status,message}){
    output.innerText = `status: ${status} message: ${message}`
}  
}

showMsg3()