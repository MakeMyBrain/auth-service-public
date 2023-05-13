const domain_extractor = (email) => {
  const ind = email.indexOf("@");
  const domain = email.substr(ind + 1);
  return domain;
};

const subscribe = async (req, res, next) => {
  const permitted_domain = ["iitkgp.ac.in", "kgpian.iitkgp.ac.in", "gmail.com"];
  try {
    const email = req.user.email;
    const domain = domain_extractor(email);
    if (!permitted_domain.includes(domain)) {
      throw new Error();
    }
    next();
  } catch (e) {
    res.status(401).send({ error: "Please subscribe. Contact MakeMyBrain!" });
  }
};

module.exports = subscribe;
