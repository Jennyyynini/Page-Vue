<template>
    <div class="animal">
        <h1 align="center">Meet My Cats! 🐱</h1>
        <p align="center">(=^･ｪ･^=) Click on the images to view more (=^･ｪ･^=)</p>
        <div class="gallery">
            <div class="photo-card">
                <router-link to="/cats/huihui">
                    <img src="../assets/huihui1.jpeg" alt="HuiHui" style="object-position: 25% 48%"></img>
                    <span>HuiHui</span>
                </router-link>
            </div>
            <div class="photo-card">
                <router-link to="/cats/macchiato">
                    <img src="../assets/macchiato1.jpg" alt="macchiato"></img>
                    <span>Macchiato</span>
                </router-link>
            </div>
            <div class="photo-card">
                <router-link to="/cats/huahua">
                    <img src="../assets/huahua1.JPG" style="object-position: 25% 83%" alt="huahua"></img>
                    <p>HuaHua</p>
                </router-link>
            </div>
            <div class="photo-card">
                <router-link to="/cats/chris">
                    <img src="../assets/chris1.jpeg" alt="chris"></img>
                    <p>Chris</p>
                </router-link>
            </div>

        </div>

        <h3 align="center"> Done viewing?</h3>
        <router-link to="/" align="center">← Back to Home</router-link>
    </div>
</template>
