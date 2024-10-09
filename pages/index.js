import styles from "@/styles/Menu.module.css";
import Head from "next/head";

const Menu = () => {
    return (
    <>
        <Head>
            <title>My Next App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* import link của Font Awesome để xài icon */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Nội dung cả trang*/}
        <div className={styles.container}>

            {/* ---NAVBAR--- */}
            <nav className={styles.nav}>

                {/* Logo */}
                <div className={styles.logo}>
                    <img src="/images/logo.png" />
                </div>

                {/* Các mục trong Navbar */}
                <ul>
                    <li>Home</li>   
                    <li>About</li>
                    <li>Menu</li>
                    <li>Order</li>
                </ul>

                {/* Icon tìm kiếm, giỏ hàng, user. Vào Font Awesome copy link của icon mình muốn dùng*/}
                <div className={styles.icon}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-circle-user"></i>
                </div>
            </nav>

            {/* ---MAIN--- */}
            <div className={styles.main}>

                {/* Tiêu đề */}
                <h1>Our<span>Menu</span></h1>

                {/* Phần nội dung menu (bên dưới tiêu đề) */}
                <div className={styles.menu}>

                        {/* Card sản phẩm 1*/}
                        <div className={styles.card}>       {/*Card*/}   

                            <div className={styles.image}>  {/*div chứa hình ảnh*/}
                                <img src="images/burger.jpg"/>
                            </div>

                            <div className={styles.info}>   {/*Phần còn lại chứa thông tin sản phẩm*/}
                                <h2>Burger</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reiciendis quaerat nobis 
                                    deleniti amet non inventore. 
                                </p>
                                <h3>$20.00</h3>
                                <div className={styles.icon}>   {/*Đánh giá*/}
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button className={styles.btn}>Order now</button> 
                            </div>
                        </div>

                        {/* Card sản phẩm 2*/}
                        <div className={styles.card}>

                            <div className={styles.image}>
                                <img src="images/burger.jpg"/>
                            </div>

                            <div className={styles.info}>
                                <h2>Burger</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reiciendis quaerat nobis 
                                    deleniti amet non inventore. 
                                </p>
                                <h3>$20.00</h3>
                                <div className={styles.icon}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button className={styles.btn}>Order now</button> 
                            </div>
                        </div>

                        {/* Card sản phẩm 3*/}
                        <div className={styles.card}>

                            <div className={styles.image}>
                                <img src="images/burger.jpg"/>
                            </div>

                            <div className={styles.info}>
                                <h2>Burger</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reiciendis quaerat nobis 
                                    deleniti amet non inventore. 
                                </p>
                                <h3>$20.00</h3>
                                <div className={styles.icon}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button className={styles.btn}>Order now</button> 
                            </div>
                        </div>

                        {/* Card sản phẩm 4*/}
                        <div className={styles.card}>

                            <div className={styles.image}>
                                <img src="images/burger.jpg"/>
                            </div>

                            <div className={styles.info}>
                                <h2>Burger</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reiciendis quaerat nobis 
                                    deleniti amet non inventore. 
                                </p>
                                <h3>$20.00</h3>
                                <div className={styles.icon}>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button className={styles.btn}>Order now</button> 
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>    
    )        
}

export default Menu