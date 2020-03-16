import {
    action,
	observable,
	// computed
} from 'mobx';

class Market {
    tickTimeout = 5000;

    @observable day = 1;

    // @computed get isDead() {
    // 	return this.health <= 0;
    // }
}


export default new Game();
