import React from 'react'
import { brandNmList, Category, Origin } from './content'

const utils = () => {


    // hehe
    const typeNm = ['Serum', 'Kem', 'Kem dưỡng']
    const imgPro = ['mp3.jpg', 'mp4.jpg', 'mp1.jpg', 'mp2.jpg']
    const price = ['150', '200', '250', '300', '400']

    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomValue(arr: any) {
        const randomItem = arr[getRandomInt(0, arr.length)];
        return randomItem.id
    }

    function getRandomValueNm(arr: any) {
        const randomItem = arr[getRandomInt(0, arr.length)];
        return randomItem.brandNm
    }

    function getRandomStr(arr: any) {
        const randomItem = arr[getRandomInt(0, arr.length)];
        return randomItem
    }

    function getRandomDate() {
        var day = Math.floor(Math.random() * (28 - 1)) + 1;
        var month = Math.floor(Math.random() * (12 - 1)) + 1;
        var year = Math.floor(Math.random() * (2024 - 2017)) + 2017;
        return year + "-" + (month.toString().length === 1 ? "0" + month : month) + "-" + (day.toString().length === 1 ? "0" + day : day)
    }

    var data = ""
    var itemDt = ""
    var itemCnt = 0
    var id = 0

    Category.forEach(element => {
        itemCnt = getRandomInt(2, 10)
        for (var i = 0; i <= itemCnt; i++) {
            console.log(`{
        id: ${id},
        cateId: ${element.id},
        brandId: ${getRandomValue(brandNmList)},
        origin: ${getRandomValue(Origin)},
        img: "/product/${getRandomStr(imgPro)}",
        prodNm:"${getRandomStr(typeNm)} ${element.cateNm} ${getRandomValueNm(brandNmList)}",
        dateImp:"${getRandomDate()}",
        price: "${getRandomStr(price)}.000",
        sellPrice: "${getRandomStr(price)}.000",
      },`)
            id += 1
        }

    });

    // hehe

    return (
        <div>utils</div>
    )
}

export default utils