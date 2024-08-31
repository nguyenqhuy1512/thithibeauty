// HomePage
export const slideData = [
    {
        id: 0,
        img: "/background1.jpg",
        title: "car1"
    },
    {
        id: 1,
        img: "/background2.jpg",
        title: "car3"
    },
];

export const slideAbout = [
    {
        id: 0,
        img: "/aboutslide.jpg",
    },
    {
        id: 1,
        img: "/aboutslide1.jpg",
    },
    {
        id: 2,
        img: "/aboutslide2.jpg",
    },
];

export const aboutInfo = () => {
    return (
        <>
            <div>
                <span className="xs:text-2xl lg:text-3xl text-pink-400 font-gvibes font-semibold ">
                    &nbsp;&nbsp;&nbsp;&nbsp;Thi Thi Beauty <span className="xs:text-2xl lg:text-3xl text-black font-gvibes ">Spa</span>&nbsp;
                </span>
                <span className="xs:text-md lg:text-lg font-about">
                    tự hào là địa chỉ hàng đầu về dịch vụ chăm sóc da mặt chuyên nghiệp tại <span className="font-semibold">Phan Thiết - Bình Thuận</span>.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Với phương châm lấy nụ cười của khách hàng làm động lực, spa luôn cố gắng, tận tình mang đến cho quý khách
                    những trải nghiệm tuyệt vời và kết quả chăm sóc da vượt trội.
                    <br /><br />
                    Các dịch vụ chăm sóc da mặt của Spa bao gồm:
                    <br />
                    &nbsp;&nbsp;&nbsp; <span className="font-semibold"><span className="text-pink-600">♣ Mesotherapy</span> </span>&nbsp;(phương pháp tiêm vitamin, enzyme, hormone,...)
                    <br />
                    &nbsp;&nbsp;&nbsp; <span className="font-semibold"><span className="text-pink-600">♣ Peel</span></span>&nbsp;(phương pháp chăm sóc da chuyên sâu bằng hợp chất hóa học)
                    <br />
                    &nbsp;&nbsp;&nbsp; <span className="font-semibold"><span className="text-pink-600">♣ Chăm sóc da mụn</span> từ cơ bản đến chuyên sâu.</span>
                    <br /><br />

                    &nbsp;&nbsp;&nbsp;Không chỉ cung cấp các dịch vụ chăm sóc da chuyên sâu, tại Spa còn đề cao tinh thần phục vụ khách hàng một cách chu đáo, ân cần thông qua
                    những buổi trị liệu da mặt. Khách hàng đến với Spa chúng em luôn được quan tâm, tư vấn và chăm sóc từ lúc bắt đầu các liệu trình đến khi
                    nhận được những thành quả tuyệt vời và tự tin hơn với làn da của mình.
                    <br />
                    &nbsp;&nbsp;&nbsp;Niềm vui của khách hàng luôn là niềm vui và động lực để chúng em nâng cao kiến thức chuyên môn, cố gắng nhiều hơn mỗi ngày.
                    <br />
                    <span className="text-pink-600">♥</span> Cảm ơn khách đã luôn tin tưởng, ủng hộ em.
                    <br />
                    <span className="text-pink-600">♥</span> Cảm ơn khách đã không bỏ cuộc, đã cùng em lắng nghe làn da của mình.

                </span>

            </div>
        </>
    )
}

export const serviceData = [
    {
        id: 0,
        img: "/icon/meso.svg",
        title: "MESOTHERAPHY",
        content: {
            imgItem: "/meso.jpg",
            descript: () => {
                return (
                    <>
                        <div className="xs:text-md lg:text-lg">
                            <span className="font-semibold">💉 Mesotherapy là gì ? </span>
                            <br />
                            👉 Là phương pháp vàng trong làng trẻ hóa, phục hồi da
                            bằng cách đưa trực tiếp các chất cần thiết cho da vào trung bì như HA, các loại Peptide, vitamin, enzyme, hormone...
                            <br />
                            <span className="font-semibold">❤️ Tác dụng của Mesotherapy ? </span>
                            <br />
                            ✅ Trẻ hóa và săn chắc da.<br />
                            ✅ Làm sáng da.<br />
                            ✅ Kích thích mọc tóc.<br />
                            ✅ Điều trị sẹo rỗ.<br />
                            ✅ Điều trị chứng tăng tiết mồ hôi.
                            <br />
                            <span className="font-semibold">💆 Mesotherapy phù hợp với ? </span>
                            <br />
                            🌿 Làn da mệt mỏi, sạm xỉn mất nước<br />
                            🌿 Da yếu, tổn thương, cần phục hồi từ gốc<br />
                            🌿 Da lão hoá nhẹ đến nhiều, xuất hiện nhăn li ti<br />
                            🌿 Hay đơn giản làn da muốn được căng bóng khoẻ, ngậm nước, trong trẻo như sương mai từ tận gốc
                            <br />
                            <span className="font-semibold">⏳ Thời gian trị liệu :  </span>  2 – 4 tuần/lần( Duy trì từ 3 - 6 lần).
                            <br />
                        </div>
                    </>
                )

            }
        }
    },
    {
        id: 1,
        img: "/icon/Peel.svg",
        title: "CHEMICAL PEEL",
        content: {
            imgItem: "/peel.jpg",
            descript: () => {
                return (
                    <>
                        <div>
                            <span className="font-semibold">👩 Chemical Peel (Peel da) là gì ? </span>
                            <br />
                            👉 Là một phương pháp tẩy tế bào chết trên da, hay gọi là tẩy tế bào chết hóa học với nồng độ cao.
                            <br />
                            <span className="font-semibold">❤️ Tác dụng của Chemical Peel (Peel da) ? </span>
                            <br />
                            ✅ Loại bỏ các tạp chất nằm sâu bên trong lỗ chân lông.<br />
                            ✅ Loại bỏ các cồi mụn cùng bã nhờn và vi khuẩn gây mụn, làm thông thoáng và se khít lỗ chân lông.<br />
                            ✅ Giúp làm giảm rõ rệt các tình trạng: nám da, sạm da, thâm mụn,...<br />
                            ✅ Tăng khả năng đàn hồi da: giảm tình trạng xuất hiện nếp nhăn, chảy xệ,...<br />
                            ✅ Rút ngắn chu kì tái tạo da, giúp bạn nhanh chóng có làn da khỏe mạnh.<br />
                            ✅ Kích thích sự sản sinh Collagen và Elastin làm đầy các tổn thương và tăng độ đàn hồi.
                            <br />
                            <span className="font-semibold">💆 Chemical Peel (Peel da) phù hợp với ? </span>
                            <br />
                            🌿 Da có mụn ẩn, mụn viêm, mụn đầu đen<br />
                            🌿 Da nhiều vết thâm, không đều màu.<br />
                            🌿 Da thiếu sức sống, không căng bóng.<br />
                            🌿 Da dầu, da khô, da hỗn hợp.<br />
                            🌿 Da có lỗ chân lông to.<br />
                            🌿 Da có tuyến bã nhờn hoạt động mạnh
                            <br />
                            <span className="font-semibold">⏳ Thời gian trị liệu :  </span>  Đạt kết quả sau 2 - 3 buổi.
                            <br />
                        </div>
                    </>
                )

            }
        }
    },
    {
        id: 2,
        img: "/icon/trimun.svg",
        title: "CHĂM SÓC MỤN",
        content: {
            imgItem: "/trimun.jpg",
            descript: () => {
                return (
                    <>
                        <div>
                            <span className="font-semibold">🌝 Điều trị và chăm sóc da mụn </span>
                            <br />
                            Quy trình chăm sóc da mụn theo chuẩn y khoa, bao gồm 12 bước:
                            <br />
                            👉 B1: Tẩy trang<br />
                            👉 B2: Rửa mặt<br />
                            👉 B3: Tẩy tế bào chết( tuỳ tình trạng da)<br />
                            👉 B4: Xông hơi + hút dầu + cà da chết<br />
                            👉 B5: Vệ sinh da và khử trùng dụng cụ<br />
                            👉 B6: Lấy mụn chuẩn y khoa<br />
                            👉 B7: Đi điện tím<br />
                            👉 B8: Đắp mặt nạ<br />
                            👉 B9: Bôi kháng sinh tại chỗ<br />
                            👉 B10 Chiếu ánh sáng sinh học<br />
                            👉 B11 Điện di máy lạnh<br />
                            👉 B12: Tư vấn cách điều trị và chăm sóc da tại nhà<br />
                            <span className="font-semibold">❤️ Kết quả điều trị </span>
                            <br />
                            ✅ Làm sạch và loại bỏ mụn trên da mặt.<br />
                            ✅ Phục hồi và tái tạo lại vùng da bị mụn.<br />
                            ✅ Bổ sung các dưỡng chất cần thiết cho việc phục hồi và dưỡng da.<br />
                            ✅ Làm mờ đi các vết sẹo tạo ra bởi mụn.<br />
                        </div>
                    </>
                )

            }
        }
    },
];

export const slideFeed = [
    {
        id: 0,
        img: "/fb1.jpg",
        title: "car1"
    },
    {
        id: 1,
        img: "/fb2.jpg",
        title: "car3"
    },
    {
        id: 2,
        img: "/fb3.jpg",
        title: "car3"
    },
    {
        id: 3,
        img: "/fb4.jpg",
        title: "car3"
    },
    {
        id: 4,
        img: "/fb5.jpg",
        title: "car3"
    },
    {
        id: 5,
        img: "/fb6.jpg",
        title: "car3"
    },
];

export const brandNmList = [
    {
        id: 0,
        img: "/brand/ivatherm.jpg",
        brandNm: "Ivatherm",
    },
    {
        id: 2,
        img: "/brand/ahohwa.png",
        brandNm: "AHOHWA",
    },
    {
        id: 3,
        img: "/brand/HYAESTIC.webp",
        brandNm: "HYAESTIC",
    },
    {
        id: 5,
        img: "/brand/postQuam.jpg",
        brandNm: "postQuam",

    },
    {
        id: 6,
        img: "/brand/eucerin.png",
        brandNm: "Eucerin",
    },
]

export const prodList = [
    {
        id: 0,
        img: "/product/mp1.jpg",
        title: "Serum Ivatherm",
        price: "100.000",
        sellPrice: "90.000",
    },
    {
        id: 1,
        img: "/product/mp2.jpg",
        title: "Kem dưỡng trắng da AHOHWA",
        price: "150.000",
        sellPrice: "120.000",
    },
    {
        id: 2,
        img: "/product/mp3.jpg",
        title: "Long Lashes",
        price: "200.000",
        sellPrice: "190.000",
    },
    {
        id: 3,
        img: "/product/mp4.jpg",
        title: "Serum AHOHWA",
        price: "330.000",
        sellPrice: "300.000",
    },
    {
        id: 4,
        img: "/product/mp1.jpg",
        title: "Serum AHOHWA",
        price: "330.000",
        sellPrice: "300.000",
    }
]

export const PhotoLibrary = [
    {
        id: 0,
        img: "/lib1.jpg",
    },
    {
        id: 1,
        img: "/lib2.jpg",
    },
    {
        id: 2,
        img: "/lib3.jpg",
    },
    {
        id: 3,
        img: "/lib4.jpg",
    },
    {
        id: 4,
        img: "/lib5.jpg",
    },
    {
        id: 5,
        img: "/lib6.jpg",
    },
    {
        id: 6,
        img: "/lib7.jpg",
    },
    {
        id: 7,
        img: "/lib8.jpg",
    },
    {
        id: 8,
        img: "/lib9.jpg",
    },
    {
        id: 9,
        img: "/lib10.jpg",
    },
    {
        id: 10,
        img: "/lib11.jpg",
    },
    {
        id: 11,
        img: "/lib12.jpg",
    },
]


//AboutPage
export const AboutContent = {
    firstPart: {
        title: () => {
            return (
                <div>
                    <span className="text-5xl font-service text-pink-300">
                        "Cô chủ nhỏ" bên trong <br />
                        chiếc Spa beauty xinh xinh!
                    </span>
                </div>
            )
        },
        content: () => {
            return (
                <div>
                    <span className="text-2xl font-service text-pink-800">
                        Kính chào quý khách đã đến với <span className="font-semibold text-3xl font-gvibes">Thi Thi Beauty Spa </span>.
                        <br />
                        Một chiếc Spa tuy nhỏ nhỏ xinh xinh nhưng chứa đựng bên trong là niềm đam mê làm đẹp vô cùng to lớn cũng như mong muốn
                        mang lại những trãi nghiệm chăm sóc da chất lượng và uy tín nhất dành cho quý khách.
                        <br />
                        Spa bên em luôn đặt sự chu đáo, tận tình và tỉ mỉ lên hàng đầu, cùng với những dịch vụ chăm sóc hiệu quả, trang thiết bị
                        hiện đại và các dòng mỹ phẩm tốt nhất để tiếp đón và phục vụ quý khách hàng.
                        <br />
                        Spa luôn mong muốn được lắng nghe và đồng hành cùng quý khách trên suốt hành trình làm đẹp và chăm sóc làn da của mình...
                    </span>
                </div>

            )
        }
    },
    secondPart: {
        img: "/about-img.jpg"
    },
    thirdPart: {
        img: "/photo1.jpg",
        content: () => {
            return (
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-4xl font-service">Vì sao chọn <span className="font-gvibes text-pink-600">Thi Thi Beauty Spa ?</span></span>
                    <br />
                    <span className="text-xl font-service">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Một HomeSpa nhỏ xinh với 2 giường điều trị được mở ra vào đầu năm 2022,
                        bởi một cô gái cũng nhỏ nhắn nhưng có một niềm đam mê cùng với cái tâm cực lớn với việc làm đẹp và điều trị da.
                        Bản thân "cô chủ nhỏ" đã luôn cố gắng cải thiện, làm mới những dịch vụ chăm sóc của Spa từng ngày,
                        nhằm đem đến cho khách hàng những liệu trình điều trị an toàn và chất lượng nhất.
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Spa luôn đặt bản thân ở vị trí Khách để có thể đồng cảm được những suy tư và lo lắng
                        của Khách trong những vấn đề về làn da. Spa sẽ luôn chào đón nhiệt thành, tư vấn tận tình, chăm sóc ân cần và theo dõi một cách chu đáo
                        với từng case trị liệu của Khách cho đến khi đạt được kết quả mong đợi.
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Spa tự tin là nơi có thể đón nhận và đáp ứng mọi nhu cầu của
                        Khách về vấn đề khắc phục và làm đẹp làn da. Với các liệu trình mang tính an toàn và hiệu quả cao nhất như Mesotheraphy, Peel da, chăm sóc da mụn từ cơ bản đến nâng cao...
                        Mỗi liệu trình đều có những lựa chọn riêng biệt, đa dạng, nhiều loại mỹ phẩm chuyên dụng, có nguồn gốc được kiểm chứng đã và luôn được lựa chọn và chuẩn bị kỹ lưỡng
                        để có thể phù hợp với đa số cơ địa da của Khách hàng.
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Niềm vui và nụ cười của Khách hàng sẽ mãi là nguồn động lực to lớn để Spa làm nghề và phát triển
                        trên hành trình mang lại những trãi nghiệm chăm sóc da ngày càng dễ chịu, thoải mái và hiệu quả nhất.
                        <br />  <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chân thành, tri ân và hy vọng đón nhận được sự ủng hộ Spa từ Khách.
                        Hãy để <span className="text-2xl font-gvibes text-pink-600">Thi Thi Beauty Spa</span> có cơ hội được đồng hành cùng Khách trên hành trình chinh phục và bảo vệ
                        làn da của mình.
                    </span>

                </div>
            )
        }
    }

}


//ServicesPage
export const ServicesContent = {
    meso: {
        title: () => { return (<div><span className="font-about text-yellow-500 lg:text-3xl">MESOTHERAPHY</span></div>) },
        img: ['/sv-meso1.jpeg', 'sv-meso2.jpg'],
        content: {
            info: () => {
                return (
                    <>
                        <div className="xs:text-md lg:text-lg">
                            <span className="font-semibold font-about">Mesotherapy là gì ? </span>
                            <br />
                            <span className="font-about">
                                Là phương pháp vàng trong làng trẻ hóa, phục hồi da
                                bằng cách đưa trực tiếp các chất cần thiết cho da vào trung bì như HA, các loại Peptide, vitamin, enzyme, hormone...
                                <br />
                                <span className="font-semibold">Mesotherapy có tác dụng ? </span>
                                <br />
                                Trẻ hóa và săn chắc da.<br />
                                Làm sáng da.<br />
                                Kích thích mọc tóc.<br />
                                Điều trị sẹo rỗ.<br />
                                Điều trị chứng tăng tiết mồ hôi.
                                <br />
                                <span className="font-semibold">Mesotherapy phù hợp với ? </span>
                                <br />
                                Làn da mệt mỏi, sạm xỉn mất nước<br />
                                Da yếu, tổn thương, cần phục hồi từ gốc<br />
                                Da lão hoá nhẹ đến nhiều, xuất hiện nhăn li ti<br />
                                Hay đơn giản làn da muốn được căng bóng khoẻ, ngậm nước, trong trẻo như sương mai từ tận gốc
                                <br />
                                <span className="font-semibold">Thời gian trị liệu :  </span>  2 – 4 tuần/lần( Duy trì từ 3 - 6 lần).
                                <br />
                            </span>
                        </div>
                    </>
                )
            },
            menu: [
                {
                    id: 0,
                    method: "♣ Meso botox kiềm dầu",
                    price: "3.000.000đ"
                },
                {
                    id: 1,
                    method: "♣ Meso botox căng bóng",
                    price: "3.500.000đ"
                },
                {
                    id: 2,
                    method: "♣ Meso căng bóng HA thuần",
                    price: " 1.690.000đ"
                },
                {
                    id: 3,
                    method: "♣ Meso căng bóng HA châu Âu (dành cho da lớn tuổi)",
                    price: "3.000.000đ"
                },
                {
                    id: 4,
                    method: "♣ Meso căng bóng HA thuần Thụy Sĩ",
                    price: "4.000.000đ"
                },
                {
                    id: 5,
                    method: "♣ Meso sáng da Tây Ban Nha",
                    price: "2.500.000đ"
                },
                {
                    id: 6,
                    method: "♣ Meso sáng da Thụy Sĩ",
                    price: "3.000.000đ"
                },
                {
                    id: 7,
                    method: "♣ Meso sáng da không buốt",
                    price: "3.500.000đ"
                },
                {
                    id: 8,
                    method: "♣ Meso phục hồi Tây Ban Nha",
                    price: "2.000.000đ"
                },
                {
                    id: 9,
                    method: "♣ Meso phục hồi Tế bào gốc",
                    price: "5.000.000đ"
                },
                {
                    id: 10,
                    method: "♣ Meso da yếu - mỏng - đỏ - nỗi mao mạch",
                    price: "2.500.000đ"
                },
                {
                    id: 11,
                    method: "♣ Meso se khít lỗ chân lông",
                    price: "2.500.000đ - 3.500.000đ"
                },
                {
                    id: 12,
                    method: "♣ Meso nám",
                    price: "3.500.000đ"
                },
                {
                    id: 13,
                    method: "♣ BAP Prohilo",
                    price: "8.000.000đ"
                },
                {
                    id: 14,
                    method: "♣ BAP Prohilo 3 buổi(gói)",
                    price: "21.000.000đ"
                },
            ]
        }
    },
    peel: {
        title: () => { return (<div><span className="font-about text-yellow-500 lg:text-3xl">Chemical Peel (Peel da)</span></div>) },
        img: ['/sv-peel.jpg', 'sv-meso2.jpg'],
        content: {
            info: () => {
                return (
                    <>
                        <div className="xs:text-md lg:text-lg">

                            <span className="font-semibold font-about">Chemical Peel (Peel da) là gì ? </span>
                            <br />
                            <span className="font-about">
                                Là một phương pháp tẩy tế bào chết trên da, hay gọi là tẩy tế bào chết hóa học với nồng độ cao.
                                <br />
                                <span className="font-semibold">Tác dụng của Chemical Peel (Peel da) ? </span>
                                <br />
                                Loại bỏ các tạp chất nằm sâu bên trong lỗ chân lông.<br />
                                Loại bỏ các cồi mụn cùng bã nhờn và vi khuẩn gây mụn, làm thông thoáng và se khít lỗ chân lông.<br />
                                Giúp làm giảm rõ rệt các tình trạng: nám da, sạm da, thâm mụn,...<br />
                                Tăng khả năng đàn hồi da: giảm tình trạng xuất hiện nếp nhăn, chảy xệ,...<br />
                                Rút ngắn chu kì tái tạo da, giúp bạn nhanh chóng có làn da khỏe mạnh.<br />
                                Kích thích sự sản sinh Collagen và Elastin làm đầy các tổn thương và tăng độ đàn hồi.
                                <br />
                                <span className="font-semibold">Chemical Peel (Peel da) phù hợp với ? </span>
                                <br />
                                Da có mụn ẩn, mụn viêm, mụn đầu đen<br />
                                Da nhiều vết thâm, không đều màu.<br />
                                Da thiếu sức sống, không căng bóng.<br />
                                Da dầu, da khô, da hỗn hợp.<br />
                                Da có lỗ chân lông to.<br />
                                Da có tuyến bã nhờn hoạt động mạnh
                                <br />
                                <span className="font-semibold">Thời gian trị liệu :  </span>  Đạt kết quả sau 2 - 3 buổi.
                                <br />
                            </span>
                        </div>
                    </>
                )
            },
            menu: [
                {
                    id: 0,
                    method: "♣ Peel mụn Tây Ban Nha",
                    price: "900.000đ"
                },
                {
                    id: 1,
                    method: "♣ Peel mụn Châu Âu",
                    price: "1.200.000đ"
                },
                {
                    id: 2,
                    method: "♣ Peel thâm mụn, hỗ trợ căng bóng(có bong), cấp độ 1",
                    price: " 1.200.000đ"
                },
                {
                    id: 3,
                    method: "♣ Peel thâm mụn, hỗ trợ căng bóng(có bong), cấp độ 2",
                    price: "1.400.000đ"
                },
                {
                    id: 4,
                    method: "♣ Peel nám (có bong)",
                    price: "2.200.000đ"
                },
                {
                    id: 5,
                    method: "♣ Peel tảo không bong",
                    price: "800.000đ"
                },
                {
                    id: 6,
                    method: "♣ Peel tảo có bong",
                    price: "1.800.000đ - 2.200.000đ"
                },
                {
                    id: 7,
                    method: "♣ Peel không bong cho da mụn hỗ trợ sau mụn (tối thiểu 3 buổi)",
                    price: "500.000đ"
                },
                {
                    id: 8,
                    method: "♣ Peel nách ( liệu trình 3 buổi )",
                    price: "2.000.000đ"
                },
            ]
        }
    },
    trimun: {
        title: () => { return (<div><span className="font-about text-yellow-500 lg:text-3xl">Chăm sóc mụn từ cơ bản đến chuyên sâu</span></div>) },
        img: ['/sv-trimun.jpg', 'sv-meso2.jpg'],
        content: {
            info: () => {
                return (
                    <>
                        <div className="xs:text-md lg:text-lg">
                            <span className="font-semibold font-about">Điều trị và chăm sóc da mụn </span>
                            <br />
                            <span className="font-about">
                            Quy trình chăm sóc da mụn theo chuẩn y khoa, bao gồm 12 bước:
                            <br />
                            &nbsp;&nbsp;&nbsp; B1: Tẩy trang<br />
                            &nbsp;&nbsp;&nbsp; B2: Rửa mặt<br />
                            &nbsp;&nbsp;&nbsp; B3: Tẩy tế bào chết( tuỳ tình trạng da)<br />
                            &nbsp;&nbsp;&nbsp; B4: Xông hơi + hút dầu + cà da chết<br />
                            &nbsp;&nbsp;&nbsp; B5: Vệ sinh da và khử trùng dụng cụ<br />
                            &nbsp;&nbsp;&nbsp; B6: Lấy mụn chuẩn y khoa<br />
                            &nbsp;&nbsp;&nbsp; B7: Đi điện tím<br />
                            &nbsp;&nbsp;&nbsp; B8: Đắp mặt nạ<br />
                            &nbsp;&nbsp;&nbsp; B9: Bôi kháng sinh tại chỗ<br />
                            &nbsp;&nbsp;&nbsp; B10: Chiếu ánh sáng sinh học<br />
                            &nbsp;&nbsp;&nbsp; B11: Điện di máy lạnh<br />
                            &nbsp;&nbsp;&nbsp; B12: Tư vấn cách điều trị và chăm sóc da tại nhà<br />
                            <span className="font-semibold">Kết quả điều trị </span>
                            <br />
                            Làm sạch và loại bỏ mụn trên da mặt.<br />
                            Phục hồi và tái tạo lại vùng da bị mụn.<br />
                            Bổ sung các dưỡng chất cần thiết cho việc phục hồi và dưỡng da.<br />
                            Làm mờ đi các vết sẹo tạo ra bởi mụn.<br />
                            </span>
                        </div>
                    </>
                )
            },
            menu: [
                {
                    id: 0,
                    method: "♣ Nặn mụn (bao gồm lấy sạch vùng mũi + sản phẩm bổi thâm tại nhà) ",
                    price: "250.000đ",
                    bonus: ""
                },
                {
                    id: 1,
                    method: "♣ Thải độc da CO2 (da yếu, da cor, da bí tắc)",
                    price: "600.000đ",
                    bonus: ""
                },
                {
                    id: 2,
                    method: "♣ Aquapeeling & Detox",
                    price: " 700.000đ",
                    bonus: ""
                },
                {
                    id: 3,
                    method: "♣ Thải độc chuyên sâu căng bóng (căng bóng, mềm da, sáng da, giảm mụn)",
                    price: "900.000đ",
                    bonus: "👉Gói 5 buổi tặng 1 buổi"
                },
                {
                    id: 4,
                    method: "♣ Thải độc chuyên sâu hỗ trợ sau mụn (căng bóng, giảm thâm đỏ, giảm mụn)",
                    price: "900.000đ",
                    bonus: "👉Gói 5 buổi tặng 1 buổi"
                },
                {
                    id: 5,
                    method: "♣ Thải độc da Nội Bào 02 - liệu trình 3 buổi (da sạm, da yếu, da nhiễm cor) ",
                    price: "1.800.000đ",
                    bonus: "👉Gói 3 buổi tặng 1 buổi thải độc chuyên sâu ngoại bào CO2"
                },
            ]
        }
    }


}