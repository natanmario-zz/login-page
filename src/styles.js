import styled from "styled-components";

export const Style = styled.div`
  .input-h {
    height: 3.875rem;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "form background";

  .background {
    height: 100vh;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .form {
    grid-area: form;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    background: #f8f8f8;
    padding: 8rem 0;

    .buttons {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-column: 2/3;
      margin-top: 14.5px;
    }

    button {
      border: none;
      border-radius: 15.3333px;
      padding: 0;
      font-size: 17.8889px;
      line-height: 27px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .primary {
      color: #ffffff;
      background: #ea454c;
      box-shadow: 0px 5.11111px 12.7778px rgba(233, 68, 75, 0.25);
      transition: 0.2s;
    }
    .primary:hover {
      background-color: #c44d56;
    }

    .outlined {
      border: 1.27778px solid rgba(0, 0, 0, 0.25);
      filter: drop-shadow(0px 5.11111px 12.7778px rgba(0, 0, 0, 0.1));
      border-radius: 15.3333px;
      transition: 0.2s;
    }

    .outlined:hover {
      background-color: #e4e9ed;
    }

    > span {
      grid-column: 2/3;
    }

    .header {
      grid-column: 2/3;
      .title {
        font-size: 43.4444px;
        line-height: 65px;
        text-transform: uppercase;
        color: #030303;
      }

      .subtitle {
        font-weight: 400;
        line-height: 27px;
        color: #636364;
      }
    }

    .fields {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 1rem;
      grid-column: 2/3;
      margin-top: 48px;
      input[type="password"],
      input[type="email"] {
        border: 1.27778px solid rgba(0, 0, 0, 0.25);
        filter: drop-shadow(0px 5.11111px 12.7778px rgba(0, 0, 0, 0.25));
        border-radius: 15.3333px;
        padding: 0 18px;
        font-size: 17.8889px;
        line-height: 27px;
        display: flex;
        align-items: center;
        margin-top: 8px;
        background: none;
      }

      input[type="checkbox"] {
        width: 18.48px;
        height: 17.16px;
        margin: 0;
        border: 1.27778px solid rgba(0, 0, 0, 0.25);
        border-radius: 5.11111px;
        margin-right: 8px;
        background: none;
        cursor: pointer;
      }

      .label {
        line-height: 21px;
        color: #181818;
      }

      .field {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20px;

        .checkbox-label {
          font-size: 15.3333px;
          line-height: 23px;
          color: #181818;
        }

        .forgot-pass {
          font-size: 15.3333px;
          line-height: 23px;
          color: #181818;
          cursor: pointer;
        }

        .forgot-pass:hover {
          text-decoration: underline;
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
        }
      }

      .row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    .text {
      font-size: 12.7778px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.03em;
      color: #595959;
      margin-top: 16px;
      cursor: pointer;
    }
    .text:hover {
      text-decoration: underline;
    }
  }
`;
