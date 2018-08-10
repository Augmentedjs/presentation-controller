class TestView {
	constructor() {
	};
	render() {
		return this;
	};

	remove() {
		return this;
	};
};

class MyController extends Controller.ViewController {
	constructor(options) {
		super(options);
	};

	initialize() {
		return true;
	};
	render() {
		return true;
	};
	remove() {
		return true;
	};
};

describe('Given Augmented Presentation View Controller', () => {
	it('is defined', () => {
		expect(Controller.ViewController).to.not.be.undefined;
	});

	describe('Given a View Controller and a test view', () => {
		let c;

		beforeEach(() => {
			c = new MyController();
		});

		afterEach(() => {
			c.removeAllViews();
			c = null;
		});

		it('can create an instance', () => {
			expect(c).to.not.be.undefined;
		});

		it('it is a controller', () => {
			expect(c instanceof Controller.ViewController).to.be.true;
		});

		it('can initialize', () => {
			expect(c.initialize()).to.be.true;
		});
		it('can render', () => {
			expect(c.render()).to.be.true;
		});
		it('can remove', () => {
			expect(c.remove()).to.be.true;
		});

		it('can manage a view', () => {
			c.manageView(new TestView());
			expect(c._views.length).to.equal(1);
		});

		it('can remove all managed views', () => {
			c.manageView(new TestView());
			expect(c._views.length).to.equal(1);
			c.removeAllViews();
			expect(c._views.length).to.equal(0);
		});

		it('can get managed views', () => {
			c.manageView(new TestView());
			const i = c.views;
			expect(i.length).to.equal(1);
		});
	});
});
