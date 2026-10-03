"use strict";

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".site-header__toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});
const links = document.querySelectorAll(".site-nav__link");
const sections = [...links]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          const match = link.getAttribute("href") === #${entry.target.id};
          link.classList.toggle("is-current", match);
          if (match) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

const rules = {
  name: (value) => (value.trim() ? "" : "Enter your name."),
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ""
      : "Enter an email address like name@example.com.",
  message: (value) =>
    value.trim().length >= 10 ? "" : "Write at least 10 characters.",
};

function validateField(field) {
  const error = rules[field.name](field.value);
  document.getElementById(${field.id}-error).textContent = error;
  field.setAttribute("aria-invalid", error ? "true" : "false");
  return !error;
}

form.addEventListener("submit", (event) => {
  const fields = [...form.querySelectorAll("input, textarea")];
  const results = fields.map(validateField);
  if (results.includes(false)) {
    event.preventDefault();
    status.textContent = "";
    fields[results.indexOf(false)].focus();
    return;
  }
  status.textContent = "Opening your email app to send the message.";
});

form.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
});
