import {
    action,
	observable,
	// computed
} from 'mobx';

class BrokerStore {
    @observable brokers = [];

}
class Brokers {
    @observable brokers = 100;

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

    // @computed get isDead() {
    // 	return this.health <= 0;
    // }
}

export default new Brokers();
