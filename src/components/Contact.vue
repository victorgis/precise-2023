<template>
  <div v-if="isLoading">
    <Loader />
  </div>

  <div class="contact-form-container">
    <div class="contact-form-details">
      <h1>Contact Form</h1>
      <p>
        Welcome to our Contact Us page! We're delighted that you've taken the
        time to reach out to us. Whether you have questions, feedback, or you
        just want to say hello, we're here to listen and assist you.
      </p>
    </div>
    <div class="contact-form-inputs">
      <form @submit="sendEmail" class="contact-form">
        <div class></div>
        <input
          type="text"
          id="name"
          name="name"
          v-model="email.name"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          id="email"
          name="email"
          v-model="email.email"
          placeholder="Email"
          required
        />

        <textarea
          id="message"
          name="message"
          v-model="email.message"
          placeholder="Message"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createToast } from "mosha-vue-toastify";
import Loader from "./Loader.vue";
export default {
  name: "PrecisegisContact",
  components: { Loader },
  data() {
    return {
      isLoading: false,
      email: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  mounted() {},

  methods: {
    async sendEmail(e) {
      e.preventDefault();
      this.isLoading = true;
      try {
        const emailData = this.email;
        const result = await axios.post(
          "https://childsolidarity-contact-page.onrender.com/api/precisegis/contacts",
          emailData
        );

        this.isLoading = false;
        createToast("Message Sent Successfully!", {
          type: "success",
          timeout: 3000,
          position: "top-right",
          onClose: () => {
            return window.location.reload();
          },
        });
        console.log("emailData", emailData);
        console.log("result", result);
      } catch (error) {
        console.log(error);
        this.isLoading = false;
        createToast("Message not sent", {
          type: "danger",
          timeout: 2000,
          position: "top-right",
          onClose: () => {
            return window.location.reload();
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.contact-form-container {
  background: rgb(190, 233, 232);
  background: linear-gradient(
    90deg,
    rgba(190, 233, 232, 1) 0%,
    rgba(95, 168, 211, 1) 100%
  );
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 60px;
  border-radius: 5px;
}

.contact-form-details {
  text-align: left;
  padding: 0 20px;
}
.contact-form-details h1 {
  font-size: 35px;
  font-weight: 900;
}
.contact-form-inputs {
  width: 90%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
  color: #333;
}

/* Style the form elements */
.contact-form label {
  display: block;
  margin-top: 10px;
  color: #333;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #1b4965;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.contact-form textarea {
  resize: vertical;
}

/* Style the submit button */
.contact-form button {
  padding: 10px;
  background-color: #1b4965;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #5fa8d3;
}

/* Add responsiveness for smaller screens */
@media (max-width: 768px) {
  .contact-form-container {
    display: block;
    padding: 10px;
  }

  .contact-form-inputs {
    width: 80%;
  }
}
</style>