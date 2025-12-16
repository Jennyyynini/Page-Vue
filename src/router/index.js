import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TestTable from '@/views/TestTable.vue'
import Cat from '../views/Cat.vue'
import CatLayout from '@/views/CatLayout.vue'
import HuiHui from '../views/HuiHui.vue'
import Macchiato from '@/views/Macchiato.vue'
import HuaHua from '@/views/HuaHua.vue'
import Chris from '@/views/Chris.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/testTable',
        name: 'testTable',
        component: TestTable
    },
    {
        path: '/cats',
        name: 'catlayout',
        component: CatLayout,
        children: [
            {
                path: "",
                name: 'cats',
                component: Cat
            },
            {
                path: 'huihui',
                name: 'huihui',
                component: HuiHui,
                meta: { protection: 'question' }
            },
            {
                path: 'macchiato',
                name: 'macchiato',
                component: Macchiato,
                meta: { protection: 'token' }
            },
            {
                path: 'huahua',
                name: 'huahua',
                component: HuaHua,
                meta: { protection: 'MC' }
            },
            {
                path: 'chris',
                name: 'chris',
                component: Chris,
                meta: { protection: 'q/a' }
            }

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    const protectionType = to.meta.protection
    if (protectionType === 'question') {
        const token = localStorage.getItem('huihui-token')
        if (token === 'eater') {
            return true
        }

        const answer = prompt('What is Huihui\'s top one hobby?')

        if (answer && answer.toLowerCase() === 'eat') {
            localStorage.setItem('huihui-token', 'eater')
            alert('Correct! HuiHui loves to eat eat eat!')
            return true
        } else {
            alert('Uh-uh. Try again!')
            return false
        }
    }
    if (protectionType === 'token') {
        const token = localStorage.getItem('macchiato-token')
        if (token === 'skinny-cat') {
            return true
        } else {
            alert('To view Macchiato, you need to set a token!')
            return false
        }
    }
    if (protectionType === 'MC') {
        const token = localStorage.getItem('huahua-token')
        if (token === 'Lala') {
            return true
        }
        const question = `
Quiz about HuaHua
What dog breed is HuaHua not afraid of?
1. Samoyed
2. Labrador  
3. Chihuahua
4. Husky

Enter the number (1-4):`

        const answer = prompt(question);
        if (answer === '2') {
            alert('Correct! HuaHua is Labrador\'s bestie!')
            localStorage.setItem('huahua-token', 'Lala')
            return true
        } else {
            alert('Uh-uh. Try again!')
            return false
        }
    }
    if (protectionType === 'q/a') {
        const token = localStorage.getItem('chris-token')
        if (token === 'no') {
            return true
        }

        const answer = prompt('Does it hurt if Chris bite you?')

        if (answer && answer.toLowerCase() === 'no') {
            localStorage.setItem('chris-token', 'no')
            alert('Correct! Chris does not really have any teeth left!')
            return true
        } else {
            alert('Uh-uh. Try again!')
            return false
        }
    }
    return true
})

export default router