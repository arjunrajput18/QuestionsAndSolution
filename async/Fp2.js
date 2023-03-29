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
                title: "Random Image"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "No order found"
          });
        }
      }, 2000);
    });
  };
  
  // your code here
  
  const imgDom = async () => {
    try {
      const {
        status,
        data: {
          photo: { link }
        }
      } = await fakeFetch5("https://example.com/photo");
  
      if (status === 200) {
        outputBox.innerHTML = `<img src=${link}>`;
      }
    } catch ({ status, message }) {
      outputBox.innerHTML = `status:${status} message: ${message}`;
    }
  };
  
  imgDom();
  // Output: an image on the DOM
