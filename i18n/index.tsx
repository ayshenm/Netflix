import i18n from 'react-i18next';
 import { initReactI18next } from 'react-i18next';

 const resources = {
    eng:{
        translation:{
            signin: 'Sign In'

        }

    },
    rus:{
        translation:{
            signin: 'Войти'

        }

    }

 }


 i18n
 .use(initReactI18next)
 .init({
    lng:'eng',
    resources

 })


 export default i18n;