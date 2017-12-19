<!-- Модальные окна -->
<div class="modals-sec">

	<div id="modal-order" class="modal">
		<div class="block-title">
			<p class="h2">Оставить заявку</p>
		</div>
		<form class="ajax-form">
			<input type="text" name="user_name" placeholder="Имя" data-label="Имя пользователя" class="text-input" >
			<input type="tel" name="user_tel" placeholder="Телефон*" data-label="Телефон"  class="text-input" data-req="true">
			<input type="email" name="user_email" placeholder="E-mail" data-label="Email" class="text-input">
			<input type="hidden" value="Новая заявка" name="form_subject">
			<label class="style-checkbox">
				<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
				<span>Соглашаюсь на обработку персональных данных и соглашаюсь с условиями <a href="#" target="_blank">политики конфиденциальности</a>.</span>
			</label>
			<div class="btn-center">
				<button type="submit" class="btn btn--red">Отправить</button>
			</div>
		</form>
	</div>

	<div id="modal-speaker" class="modal">
		<div class="block-title">
			<span>Пригласить меня спикером</span>
			<p class="h2">Оставить заявку</p>
		</div>
		<form class="ajax-form">
			<input type="text" name="user_name" placeholder="Имя" data-label="Имя пользователя" class="text-input" >
			<input type="tel" name="user_tel" placeholder="Телефон*" data-label="Телефон"  class="text-input" data-req="true">
			<input type="email" name="user_email" placeholder="E-mail" data-label="Email" class="text-input">
			<input type="hidden" value="Новая заявка" name="form_subject">
			<label class="style-checkbox">
				<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
				<span>Соглашаюсь на обработку персональных данных и соглашаюсь с условиями <a href="#" target="_blank">политики конфиденциальности</a>.</span>
			</label>
			<div class="btn-center">
				<button type="submit" class="btn btn--red">Отправить</button>
			</div>
		</form>
	</div>

	<div id="modal-review" class="modal modal--review">
		<div class="block-title">
			<span>Ваши впечатления</span>
			<p class="h2">Оставить отзыв</p>
		</div>
		<form class="ajax-form">
			<div class="form-col">
				<div class="form-col__left">
					<input type="text" name="user_name" placeholder="Имя" data-label="Имя пользователя" class="text-input" >
					<input type="tel" name="user_tel" placeholder="Телефон*" data-label="Телефон"  class="text-input" data-req="true">
					<input type="email" name="user_email" placeholder="E-mail" data-label="Email" class="text-input">
					<input type="hidden" value="Новая заявка" name="form_subject">
				</div>
				<textarea class="input-textarea" name="review" placeholder="Комментарий*" data-req="true"></textarea>
			</div>

			<div class="form-col form-col--btns">
				<div class="form-col__left">
					<label class="style-checkbox">
						<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
						<span>Соглашаюсь на обработку персональных данных и соглашаюсь с условиями <a href="#" target="_blank">политики конфиденциальности</a>.</span>
					</label>
				</div>
				<div class="form-col__right">
					<div class="btn-wrap">
						<button type="submit" class="btn btn--red">Отправить</button>
					</div>
				</div>
			</div>
		</form>
	</div>

	<div id="modal-thanks" class="modal">
		<p>Спасибо за заявку!</p>
	</div>

	<div id="modal-error" class="modal">
		<p>Что-то пошло не так.</p>
		<p>Попробуйте еще раз.</p>
		<p>Если постоянно видите эту ошибку, пожалуйста, обратитесь к администратору сайта. Мы будем очень благодарны.</p>
	</div>

</div>
<!-- Модальные окна -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/assets.js" type="text/javascript" ></script>
<script src="js/main.js?192017" type="text/javascript" ></script>

	</body>
</html>
