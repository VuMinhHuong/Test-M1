// Bài 1

// let str1 = '';
// let str2 = '';
// str1 = prompt(('Nhập chuỗi str1 của bạn:'));
// for (let i = str1.length - 1; i >= 0; i--){
//     str2 += str1[i];
// }
// console.log(str2);

//========================================================================================
// //Bài 2:

// let str1 = prompt('Nhập chuỗi ký tự').toLocaleLowerCase();
// let arr = [];
// arr1 = str1.split(' ');
// //console.log(arr1);
// for (let i = 0; i <= str1.length-1; i++){
//     console.log(arr1[i]);
//     //console.log(arr1[i,0]);
// }
// // //let arr = str1.split(' ');
// //console.log(arr1.join(' '));

//========================================================================================
//Bài 4:

// let arr1 = [5,10,3,1,2];
// let ar2=[];
// let temp1;
// let temp2;
// let a = arr1.length;
// console.log(a);
// for (let i = 0; i <a; i++){
//     temp1 = Math.min(...arr1);
//     for (let i = 0; i < a; i++){
//         if (temp1 === arr1[i]){
//             temp2 = i;
//         }
// }
// arr1.splice(temp2,1);
// ar2.push(temp1);
// }
// console.log(ar2);

//========================================================================================
//Bai 5:

// let ar = ['A', 'B', 'C'];
// let ip = prompt('Nhap C/R/U/D: ');
// if (ip==='C'){
//     let c = prompt('Nhập tên muốn thêm: ');
//     ar.push(c);
//     for (let i = 0; i < ar.length; i++){
//         console.log(ar[i]);
//     }

// } else if (ip==='R'){
//     for (let i = 0; i < ar.length; i++){
//         console.log(ar[i]);
//     }
// } else if (ip==='U'){
//     let u = prompt('Nhập tên bạn muốn update:');
//     let u2 = prompt('Nhập tên bạn muốn thay thế');
//     let u3;
//     for (i=0; i<ar.length; i++){
//         if(u2===ar[i]){
//             u3=i;
//         }
//     }
//     ar.splice(u3,1,u)
//     for (let i = 0; i < ar.length; i++){
//     console.log(ar[i]);
//     }

// } else if (ip==='D'){
//     let d = prompt('Nhập tên bạn muốn xóa');
//     let d1;
//     for (i=0; i<ar.length; i++){
//         if(d===ar[i]){
//             d1=i;
//         }
//     }
//     ar.splice(d1,1)
//     for (let i = 0; i < ar.length; i++){
//     console.log(ar[i]);
//     }
// }

//========================================================================================
// Bai 6:
// A:
// let ngay = Number(prompt('Nhap ngay dd'));
// let thang = Number(prompt('Nhap thang mm'));
// let nam = Number(prompt('Nhap nam yyyy'));
// let ktNgay = 0;
// let ktThang = 0;
// let kt = 0;
// console.log(`Ban da nhap ngay/thang/nam la: ${ngay}/${thang}/${nam}`);
// // tim nam nhuan:
// if (nam % 4 === 0){
//     kt = 1;
//  }
// // Kiem tra:
// // Thang
// if (thang < 1 && thang > 12){
//     ktThang = 1;
// }
// // Ngay:
// if (thang === 1 && thang === 3 && thang === 5 && thang === 7 && thang === 8 && thang === 10 && thang === 12){
//     if (ngay < 1 && ngay > 31){
//         ktNgay = 1;
//     }
// }
// if (thang === 4 && thang === 6 && thang === 9 && thang === 11){
//     if (ngay < 1 && ngay > 30){
//         ktNgay = 1;
//     }
// }
// if (kt = 0){
//     if (ngay < 1 && ngay > 28){
//         ktNgay = 0;
//     }
// } else if (kt = 1){
//     if (ngay < 1 && ngay > 29){
//         ktNgay = 1;
//     }
// }
// if (ktNgay === 0 && ktThang === 0){
//     console.log('Ban nhap hop le');
// } else {
//     console.log('Ban nhap KHONG hop le');
// }