import { createMachine, interpret } from 'xstate';
const machine = createMachine(
	{
		/** @xstate-layout N4IgpgJg5mDOIC5QFs6zAOxgJwMpmwDcBLAYzADpYAXAQ22oAJSALW664rAYlIBsyAawDaABgC6iUAAcA9rGKdZGKSAAeiAJwBmACwVtADgBMAdmO7togGwBWa6YA0IAJ6JtARg8VNok6c0Pa1EbAF9Q51RYdCwCfCIySlpYQUYMWlRuNRp2JIAzagIACg8Q0QBKbiiYnHiScgpk1PTUMUkkEDkFJRUOjQQPM28PXUDTU2ttbQnDZzcET20KXVFbXRMvQ0DNTXDItExagnqklLSMsCycwsaC4tKQyurDuOPExrOWsGEPdpl5RTEZSqfqlFY+Ua2B7WUY2OaIYwmCi2Ey6DymQaI3TGYzaPYgZ6xPBvBqYQrYc6ZGIQNqqLqA4F9RAeNaGCiGWxWPSaezmSzwhZeHx+MyBYJhCIEg5EurvWAsWQAd0pl2ydButDu2BKZSe0qOCQa8qVKtpHXpPRBzM0SOMO1xRmshj8KIFi2Wq3Wxk2212ksJBpOVAVyq+V3V+XJOseVX1r0NlGNoYuPz+nQBlqZA1MtmMFFEOxhtgLOgC1gFiLzKIs6MxhmxuPxAfjQaajFgAFcAEYAKzApGo4dytyjDwqseiL2JCY+qU7vf71DN-26QN6oH6uPWwtzDw5W05bo8SxWrO9Hi2Hh2Tbj09bZ3nfYHQ41Wuj4+bd-ebcfi9TdIzNcrQQc82VMT1dACex63LVwESRas0QxHF6xxPF-VvWVSQwcl227J9B2pZd01XRkNwRGFRGWOxdGCFljGsIsj28Xx-DFEJrBvScZRJRMQzwhdnzVYdNVHXUJxqFs5X438B2Ii0gKzKwOXzUQRlsDEVimbRbCPE9PQ2C9fS4ySvyNGT8MXF9I3ucTPywviTVkpdfgA0j13UeC1nZNTdzsAs0Vg+ZK2RVFaxQht0P2bjA2-M4wGQWhiD4ayR1smN7N42dGASpK+HkwCyM8hZdChChglMSwphREZET0j0zx9K8-Wi0yHOy3LktS0T0o-TCsrbTr8tc81Co8-ptBxbwVlMetSq2Sw7ArBCwuQrE0JMqd2rJAgcsSrqiIkNyGXG9xzFMHxDEq9YbHWXRdGY4U2KCDjNp4mckz2vLurfMc9RiqTzJNIaCvc4DAqooxj00axNAmJ1ZjgwV9Maozmre2KGjbapaBgH6xIy-qZ2xtBce+I7RrBrNSoYy7TGmTxNHuuH6tPJ0LxurxTAxwHTlSHG8eE18Cb6gGzL5xgBe+EaVxO8G7WsChZvGObjA0wJlqrVa60innxYoHaKSl7hDrTBSiv6UZvQoFlJose6rsPJHtFh5Ziw5b1zFxVY9faz7jdBuXqc0Mx2VonMmZZGwgsQQxpv3AI0UsXyPF9rLqS4KBuAgZRKC4QhZEEPOMALouAFou2QQQAC9pEDzNyIWbydNo0pjFESwTDWCsLHZHMgh02adIvWw04+zAIEz7gCGwWRsAoaQ+HYPI5+QCh88LsAK6r2v68UxuW4MNZrDbjujDVh7nfb8rOShiwNNsHkoqlMXtuwWfsG4XGkowPeLcQBwVEgjWG9JCZ0PJdLOyvDbew6ITCGCdIWMeQYYiDm-lwP+p0ECAJtoxUBPJwG2EgcFXEBhxjBB2CiAIWxn6ZQ+vxIa+Ner-TaunBh+1hpmzGsBbQOggFx1buscwMNiHwS1jWNaqFGz4gwLICAcBVB0JOMdBuxUy4xwQGXWwPgdCIhdpNem9NDCGGQXKOgDBmBsA4JnFR+9iqzW8PTKwIQMQwj0JfeY1V8yclhmrQwk11gclMVjT4FxbH-wGAFZY6xfAjx0naYwbodLeJdiHFEATjGjwwq-LKhsVThKwSMQYyIiG8PRDiXMJgknaNWKkvxGSgnZNYfQk0XwCnAXRDaMONp3Z2gQRiapKTfHpIsJk4JEtnLtKzN6OwFAzCMV8HYF29htCDNqcM-xozGmtS2rknCu1JmUyDo3CwvgDBeGxEhWipS1k+LSZswJWSdnvRQRZQS1ApknIWuVBJ7cjCiHhhorx6z7kNKeS-Zp95UhDU+cVAx2j7CBAvIiE+BZbl1JGY88ZBt9kUhhUc1RE1H5LDUnoSqfg7DBCBckkF9StngqUdJYGHDYUTThhdR+2xBhBBtB49wNK7l0qxU03ZxMzhS1ZYgKqF1AnwwvCMUY6KNlguxXkiVBK7GWwmNonkOJfJrBzKs52AqMUPLGSKl5TLlTqtloSxAxZGLIkqqUbk7c4aiJApyAw7iYaQQLHbbFGcsCSoQNiCsMM5khAVtMB0CDVXvzniGohVF-FbHpgxTpVTnbYgML5MYe5tkQtFSgskSbizsiMHDSaJ9qGJKRhYRWuZGYOGxFMUQLtwjhCAA */
		id: 'messengerService',
		context: {
			name: '',
			email: '',
			message: '',
			subject: '',
			step: 1
		},
		initial: 'start chatting',
		states: {
			'start chatting': {
				tags: '1',
				on: {
					click: {
						target: 'ask name',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'ask name': {
				after: {
					'100': [
						{
							target: '#messengerService.enter name',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '2'
			},
			'enter name': {
				tags: 'editable',
				on: {
					send: {
						target: 'show name',
						cond: 'name is valid',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show name': {
				after: {
					'100': [
						{
							target: '#messengerService.ask subject',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '4'
			},
			'ask subject': {
				after: {
					'100': [
						{
							target: '#messengerService.enter subject',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '5'
			},
			'enter subject': {
				tags: 'editable',
				on: {
					send: {
						target: 'show subject',
						cond: 'subject is valid',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show subject': {
				after: {
					'100': [
						{
							target: '#messengerService.ask email',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '7'
			},
			'ask email': {
				after: {
					'100': [
						{
							target: '#messengerService.enter email',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '8'
			},
			'enter email': {
				tags: 'editable',
				on: {
					send: {
						target: 'show email',
						cond: 'email is valid',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show email': {
				after: {
					'100': [
						{
							target: '#messengerService.ask message',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '10'
			},
			'ask message': {
				after: {
					'100': [
						{
							target: '#messengerService.enter message',
							actions: [
								{
									params: {},
									type: 'change step'
								}
							]
						},
						{
							internal: false
						}
					]
				},
				tags: '11'
			},
			'enter message': {
				tags: 'editable',
				on: {
					send: {
						target: 'show message',
						cond: 'if message',
						actions: {
							params: {},
							type: 'change step'
						}
					}
				}
			},
			'show message': {
				tags: '13',
				always: {
					target: 'sending',
					actions: {
						params: {},
						type: 'change step'
					}
				}
			},
			sending: {
				invoke: {
					src: 'send to db',
					id: 'invoke-bmkzp',
					onError: [
						{
							target: 'error',
							actions: {
								params: {},
								type: 'change step'
							}
						}
					],
					onDone: [
						{
							target: 'sent',
							actions: {
								params: {},
								type: 'change step'
							}
						}
					]
				},
				tags: '14'
			},
			error: {
				tags: '15',
				on: {
					again: {
						target: 'start chatting',
						actions: {
							params: {},
							type: 'reset steps'
						}
					}
				}
			},
			sent: {
				tags: '15',
				on: {
					again: {
						target: 'start chatting',
						actions: {
							params: {},
							type: 'reset steps'
						}
					}
				}
			}
		},
		schema: {
			context: {} as {
				name: string;
				email: string;
				message: string;
				subject: string;
				step: number;
			},
			events: {} as { type: 'click' } | { type: 'send'; value: string } | { type: 'again' }
		},
		predictableActionArguments: true,
		preserveActionOrder: true,
		tsTypes: {} as import('./messenger.typegen').Typegen0
	},
	{
		actions: {
			'change step': (context) => {
				console.log('Called', context.step);
				context.step += 1;
			},
			'reset steps': (context) => {
				context.step = 1;
			}
		},
		services: {
			'send to db': async (context, event) => {
				const res = await fetch('/api/contact', {
					method: 'POST',
					body: JSON.stringify(context),
					headers: {
						'content-type': 'application/json'
					}
				});
				console.log(res);
			}
		},
		guards: {
			'subject is valid': (context, event) => {
				if (event?.value?.length > 3) {
					context.subject = event?.value;
					return true;
				} else return false;
			},
			'name is valid': (context, event) => {
				if (event?.value?.length > 3) {
					context.name = event?.value;
					return true;
				} else return false;
			},
			'email is valid': (context, event) => {
				if (event?.value?.length > 3) {
					context.email = event?.value;
					return true;
				} else return false;
			},
			'if message': (context, event) => {
				if (event?.value?.length > 3) {
					context.message = event?.value;
					return true;
				} else return false;
			}
		},
		delays: {}
	}
);

export const messengerService = interpret(machine).start();
