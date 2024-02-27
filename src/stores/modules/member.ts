// 定义 Store
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useMemberStore = defineStore(
    'member',
    () => {
        // 用户信息
        const profile = ref()

        // 保存用户信息，登录时使用
        const setProfile = (val: any) => {
            profile.value = val;
        }

        // 清理用户信息，退出时使用
        const clearProfile = () => {
            profile.value = undefined
        }

        return {
            profile,
            setProfile,
            clearProfile
        }
    },
    // 持久化
    {
        // 网页端配置
        // persist: true,
        // 小程序端配置
        persist: {
            // 兼容多端得api
            storage: {
                getItem(key) {
                    return uni.getStorageSync('key')
                },
                setItem(key, value) {
                    uni.setStorageSync(key, value)
                },
            }
        }
    }
)