import "antd/dist/antd.css";
import "./registerForm.scss";
/**
 * import individually components from antd for efficiency
 *  */
import Select from "antd/es/select";
import Form from "antd/es/form";
import DatePicker from "antd/es/date-picker";
import Input from "antd/es/input";
import InputNumber from "antd/es/input-number";
import Button from "antd/es/button";

import { useState } from "react";
import { MyModal } from "@martidev/react-modal-ts";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/user.slice";

import stateNames from "../../Datas/states";

function RegisterForm() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();
  interface RawDatas {
    firstname: string;
    lastname: string;
    birthDate: moment.Moment;
    startDate: moment.Moment;
    street: string;
    city: string;
    states: any;
    department: string;
    zipCode: number;
  }

  const handleSubmit = (e: RawDatas) => {
    dispatch(
      addUser({
        ...e,
        birthDate: e.birthDate.format("MM-DD-YYYY"),
        startDate: e.startDate.format("MM-DD-YYYY"),
        states: stateNames.find((ed) => ed.name.toLowerCase() === e.states)
          ?.abbreviation,
      })
    );
    form.resetFields();
    setOpen(true);
    document.addEventListener("mousedown", () => setOpen(false));
  };

  return (
    <>
      <MyModal
        open={open}
        closeBtnStyle="coloris"
        styledContent="content"
        hideModal={async () => setOpen(false)}
        img="/img/success3.svg"
      >
        <div className="modal-content">
          <h3>Successfully registrated 👍</h3>
          <h4>Go to Employees to check your registration</h4>
          <Button
            className="save__button padding-bottom"
            type="primary"
            htmlType="button"
            onClick={() => setOpen(false)}
          >
            OK
          </Button>
        </div>
      </MyModal>
      <Form
        className="registerForm"
        onFinish={handleSubmit}
        layout="vertical"
        form={form}
      >
        <section className="mainInfo">
          <h2 className="registerForm__main-content__titles">Main info</h2>
          <p className="mainInfo__description">
            Please fill the information needed about yourself
          </p>
          <article className="mainInfo__content">
            <Form.Item
              label="First Name"
              name="firstname"
              htmlFor="firstname"
              className="firstname inputSpace"
              rules={[
                { required: true, message: "Enter your First Name" },
                { whitespace: true },
              ]}
            >
              <Input
                required
                autoComplete="off"
                maxLength={15}
                name="firstname"
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastname"
              htmlFor="lastname"
              className="lastname inputSpace"
              rules={[
                { required: true, message: "Enter your Last Name" },
                { whitespace: true },
              ]}
            >
              <Input required autoComplete="off" name="lastname" />
            </Form.Item>

            <Form.Item
              className="birthDate"
              name="birthDate"
              htmlFor="birthDate"
              label="Day of Birth"
              rules={[
                {
                  required: true,
                  message: "Enter your Date of Birth",
                },
              ]}
            >
              <DatePicker
                picker="date"
                format="MM/DD/YYYY"
                placement="topRight"
                name="birthDate"
              />
            </Form.Item>
            <Form.Item
              className="startDate"
              label="Start Date"
              htmlFor="startDate"
              name="startDate"
              rules={[
                {
                  required: true,
                  message: "Enter your Start Date",
                },
              ]}
            >
              <DatePicker
                name="startDate"
                picker="date"
                format="MM/DD/YYYY"
                placement="topRight"
              />
            </Form.Item>
          </article>
          <article className="mainInfo__content">
            <Form.Item
              name="department"
              htmlFor="department"
              label="Department"
              rules={[
                { required: true, message: "Enter your Department of Work" },
                { whitespace: true },
              ]}
            >
              <Select
                aria-label="choose a Department"
                aria-expanded="true"
                aria-owns="department"
                aria-controls="department"
                aria-activedescendant=""
              >
                <Select.Option value="sales">sales</Select.Option>
                <Select.Option value="marketing">marketing</Select.Option>
                <Select.Option value="engineering">Engineering</Select.Option>
                <Select.Option value="human resources">
                  Human Resources
                </Select.Option>
                <Select.Option value="legal">Legal</Select.Option>
              </Select>
            </Form.Item>
          </article>
        </section>
        <section className="address">
          <h2 className="registerForm__main-content__titles">Address</h2>
          <p className="address__description">
            Please fill the information needed about where you live
          </p>
          <article className="address__content">
            <Form.Item
              className="street inputSpace"
              label="Street"
              htmlFor="street"
              name="street"
              rules={[
                { required: true, message: "Enter your Street" },
                { whitespace: true },
              ]}
            >
              <Input name="street" />
            </Form.Item>
            <Form.Item
              className="city inputSpace"
              name="city"
              htmlFor="city"
              label="City"
              rules={[
                { required: true, message: "Enter your City" },
                { whitespace: true },
              ]}
            >
              <Input maxLength={23} name="city" />
            </Form.Item>
            <Form.Item
              className="state inputSpace"
              label="State"
              htmlFor="states"
              name="states"
              rules={[
                { required: true, message: "Enter your State" },
                { whitespace: true },
              ]}
            >
              <Select
                aria-label="choose a State"
                aria-expanded="true"
                aria-owns="state"
                aria-controls="state"
                aria-activedescendant=""
              >
                {stateNames.map((options, index) => (
                  <Select.Option key={index} value={options.name.toLowerCase()}>
                    {options.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              className="zipCode inputSpace"
              label="Zip Code"
              htmlFor="zipCode"
              name="zipCode"
              rules={[
                {
                  required: true,
                  message: "Enter your zip code",
                },
              ]}
            >
              <InputNumber name="zipCode" />
            </Form.Item>
          </article>
          <article className="address__content">
            <Button className="save__button" type="primary" htmlType="submit">
              Save
            </Button>
          </article>
        </section>
      </Form>
    </>
  );
}

export default RegisterForm;
