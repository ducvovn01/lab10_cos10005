/* Validate the registration form using jQuery. */
function validate() {
	var sid = $("#sid").val().trim();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val().trim();
	var genm = $("#genm").prop("checked");
	var genf = $("#genf").prop("checked");
	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;

	/* Rule 1: all fields must be completed and a gender selected. */
	if (sid === "") {
		errMsg += "<li>User ID cannot be empty.</li>";
	}
	if (pwd1.trim() === "") {
		errMsg += "<li>Password cannot be empty.</li>";
	}
	if (pwd2.trim() === "") {
		errMsg += "<li>Retype password cannot be empty.</li>";
	}
	if (uname === "") {
		errMsg += "<li>User name cannot be empty.</li>";
	}
	if (!genm && !genf) {
		errMsg += "<li>A gender must be selected.</li>";
	}

	/* Rule 2: the lab requires an @ symbol after the start of the ID. */
	if (sid.indexOf("@") === 0) {
		errMsg += "<li>User ID cannot start with an @ symbol.</li>";
	}
	if (sid.indexOf("@") < 0) {
		errMsg += "<li>User ID must contain an @ symbol.</li>";
	}

	/* Rule 3: both password entries must match exactly. */
	if (pwd1 !== pwd2) {
		errMsg += "<li>Passwords do not match.</li>";
	}

	/* Rule 4: names may contain only letters and spaces. */
	if (!pattern.test(uname)) {
		errMsg += "<li>User name contains symbols.</li>";
	}

	/* Show all errors together in the HTML/CSS popup. */
	if (errMsg !== "") {
		var numOfItems = errMsg.match(/<li>/g).length + 6;
		var previousFocus = $(document.activeElement);

		/* Prevent duplicate popups after repeated validation. */
		$("#scrnOverlay, #errWin").remove();
		errMsg = "<div id='scrnOverlay'></div>"
			+ "<section id='errWin' class='window' role='dialog'"
			+ " aria-modal='true' aria-labelledby='errTitle' aria-describedby='errList'>"
			+ "<h2 id='errTitle'>Please correct these errors</h2>"
			+ "<ul id='errList'>" + errMsg + "</ul>"
			+ "<div class='buttonrow'><a href='#' id='errBtn' class='button'>Close</a></div>"
			+ "</section>";

		/* Keep generated elements inside body for valid HTML. */
		$("body").append(errMsg);
		$("#scrnOverlay").css("visibility", "visible");
		$("#errWin").css({
			height: numOfItems.toString() + "em",
			marginTop: (numOfItems / -2).toString() + "em",
			maxHeight: "80vh",
			overflowY: "auto"
		}).show();

		function closeError(event) {
			event.preventDefault();
			$("#scrnOverlay, #errWin").remove();
			previousFocus.trigger("focus");
		}

		$("#errBtn").on("click", closeError).trigger("focus");
		$("#errWin").on("keydown", function (event) {
			if (event.key === "Escape") {
				closeError(event);
			} else if (event.key === "Tab") {
				/* Close is the only control in this modal. */
				event.preventDefault();
				$("#errBtn").trigger("focus");
			}
		});
		result = false;
	}
	return result;
}

/* Collapse or expand the fieldset following the clicked control. */
function toggle(event) {
	event.preventDefault();
	var control = $(this);
	var section = control.parent().next("fieldset");
	var expanded = control.attr("aria-expanded") === "true";

	section.stop(true, true).slideToggle();
	control.text(expanded ? "[+]" : "[-]");
	control.attr("aria-expanded", String(!expanded));
	control.attr("aria-label", (expanded ? "Expand " : "Collapse ")
		+ section.children("legend").text());
}

/* Link the events when the document is ready. */
function init() {
	$(".collapse").on("click", toggle).on("keydown", function (event) {
		if (event.key === " ") {
			event.preventDefault();
			$(this).trigger("click");
		}
	});
	$("#regform").on("submit", validate);
}

$(document).ready(init);
