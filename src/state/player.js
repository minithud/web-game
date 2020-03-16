import {
    action,
    observable,
    // computed
} from 'mobx';


class Player {
    @observable money = 100;

    @action.bound
    spend(amount) {
        if (amount > money) {
            return false;
        } else {
            this.money -= amount;
            return true;
        }
    }

    @action.bound
    earn(amount) {
        money += amount
    }

}

export default new Player();
