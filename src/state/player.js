import {
	observable,
	computed
} from 'mobx';

class Player {
    @observable name = 'Traveler';

    @observable health = 100;
    @observable maxHealth = 100;

    @observable capacity = 100;
    @observable maxCapacity = 100;

    @observable hunger = 100;
    @observable thirst = 100;

    @computed get isDead() {
    	return this.health <= 0;
    }
}

export default new Player();
