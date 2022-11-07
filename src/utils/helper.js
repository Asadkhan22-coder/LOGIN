// Sign in page code start
export const check = (rec) => {
  if (rec.Username === "" || rec.Password === "") {
    return false;
  } else {
    return true;
  }
};

export const show = (rec) => {
  // var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  if (rec.Password?.length > 6 && rec.Username !== "") {
    return true;
  } else {
    return false;
  }
};

export const isSignIn = (rec) => {
  if (check(rec)) {
    if (show(rec)) {
      return "Successfully login";
    } else {
      return "Email and password is not correct";
    }
  } else {
    return "Please fill all fields";
  }
};
// Sign in page code End

// Sign up page code start
export const isValid = (rec) => {
  if (
    rec.username === "" ||
    rec.mail === "" ||
    rec.password === "" ||
    rec.repeat === ""
  ) {
    return false;
  } else {
    return true;
  }
};

export const isPasswordMatch = (rec) => {
  if (rec.password === rec.repeat) {
    return true;
  } else {
    return false;
  }
};

export const isSignUp = (rec) => {
  if (isValid(rec)) {
    if (isPasswordMatch(rec)) {
      return "Succesfully Sign up";
    } else {
      return "password and repeat password doesnt match";
    }
  } else {
    return "Please fill all fields";
  }
};
// Sign up page code end
