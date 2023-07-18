const path = require("path");
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const errorHandler = require("./src/middlewares/error");
const dotenv = require("dotenv");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: "./config/config.env" });
app.use(cors({ origin: "*" }));
if (process.env.NODE_ENV === "development") {
   app.use(morgan("dev"));
}
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

const PORT = 8000;

app.use(errorHandler);



app.listen(PORT, () => {
   console.log("listening on ", PORT);
});

app.get("/paises", (req, res) => {

   const items = [
      {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      },
      {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      }, {
         'name': 'ANGOLA',
         'capital': 'LUANDA'
      },
      {
         'name': 'EGIPTO',
         'capital': 'CAIRO'
      },

      {
         'name': 'ISRAEL',
         'capital': 'JERUSALEM'
      },


   ]

   res.json(items);


})


app.post("/upload", (req, res) => {

   console.log("@");

   if (!req.files) {
      return next(new ErrorResponse(`Please  select a file`, 404));
   }

   const file = req.files.image;

   console.log(req.files)
   console.log(req.files.image.name)
   console.log(req.files.image.name)

   console.log(req.files)
   file.mv(`./src/public/${file.name}`, async (err) => {
      if (err) {
        console.log(err);
      }
  
    });
  // console.log(req.body.image)

   //create custom file name

   //file.name = `photo_${path.parse(file.name).ext}`;


   res.status(200).json({ sucess: true, data: 'dndnd' });
}

)

app.get("/simples", (req, res) => {

   const items = [
      {
         'owner': 'Avelino Fernandes',
         'title': 'SUBTENENTE',
         'creation_date': 22
      },
      {
         'owner': 'Avelino Fernandes',
         'title': 'SUBTENENTE',
         'creation_date': 22
      },
      {
         'owner': 'Avelino Fernandes',
         'title': 'SUBTENENTE',
         'creation_date': 22
      },
      {
         'owner': 'Avelino Fernandes',
         'title': 'SUBTENENTE',
         'creation_date': 22
      },





   ]

   res.json({ items: items });

})




