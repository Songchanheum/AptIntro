export default {
    set: (key, value) => {
        if (!localStorage) throw new Error("로컬 저장소를 사용할수 없습니다.");

        if (Object.entries(localStorage).findIndex(storageKey => storageKey === key) !== -1) throw new Error("이미 저장되어있는 키입니다.");

        localStorage[key] = (typeof value) === 'string' ? value : JSON.stringify(value);
    },
    get: (key) => {
        if (!localStorage) throw new Error("로컬 저장소를 사용할수 없습니다.");

        if (!localStorage[key]) {
            return null;
        }

        try {
            /**
             * string 값으로 저장 되어 있기 때문에 일단 객체화를 수행해보고 오류가 발생한다면 
             * 일반 String으로 판단하고 return 한다
             */
            const parsed = JSON.parse(localStorage[key]);

            return parsed;
        } catch (e) {
            return localStorage[key];
        }
    },
    removeByKey: (key) => {
        if (!localStorage) throw new Error("로컬 저장소를 사용할수 없습니다.");

        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
    },
    removeByValue: (value) => {
        if (!localStorage) throw new Error("로컬 저장소를 사용할수 없습니다.");

        Object.entries(localStorage).filter(key => {
            if(localStorage[key] === value){
                return true;
            }

            return false;
        }).map().forEach(key => {
            localStorage.removeItem(key);
        });
    }
};