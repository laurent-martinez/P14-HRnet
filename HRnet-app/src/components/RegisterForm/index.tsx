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
    setOpen(true);
    document.addEventListener("mousedown", () => setOpen(false));
  };

  return (
    <Form className="registerForm" onFinish={handleSubmit} layout="vertical">
      <MyModal
        open={open}
        closeBtnStyle="coloris"
        styledContent="content"
        hideModal={async () => setOpen(false)}
        img="/img/logotest3.svg"
      >
        <button type="button" onClick={() => setOpen(false)}>
          ok
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          omnis blanditiis veniam veritatis ullam officiis accusantium deserunt
          in repellat autem excepturi quidem temporibus magnam reiciendis est
          accusamus, adipisci provident quasi.
        </p>
      </MyModal>

      <section className="mainInfo">
        <h2 className="registerForm__main-content__titles">Main info</h2>
        <p className="mainInfo__description">
          Please fill the information needed about yourself
        </p>
        <article className="mainInfo__content">
          <Form.Item
            label="First Name"
            name="firstname"
            className="firstname inputSpace"
            rules={[{ required: true }]}
          >
            <Input required autoComplete="off" maxLength={15} />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            className="lastname inputSpace"
            rules={[{ required: true }]}
          >
            <Input required autoComplete="off" />
          </Form.Item>

          <Form.Item
            className="birthDate"
            name="birthDate"
            label="Day of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker
              picker="date"
              format="MM/DD/YYYY"
              placement="topRight"
            />
          </Form.Item>
          <Form.Item
            className="startDate"
            label="Start Date"
            name="startDate"
            rules={[{ required: true }]}
          >
            <DatePicker
              picker="date"
              format="MM/DD/YYYY"
              placement="topRight"
            />
          </Form.Item>
        </article>
        <article className="mainInfo__content">
          <Form.Item
            name="department"
            label="Department"
            rules={[{ required: true }]}
          >
            <Select>
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
            name="street"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="city inputSpace"
            name="city"
            label="City"
            rules={[{ required: true }]}
          >
            <Input maxLength={23} />
          </Form.Item>
          <Form.Item
            className="state inputSpace"
            label="State"
            name="states"
            rules={[{ required: true }]}
          >
            <Select style={{ width: 190 }}>
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
            name="zipCode"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>
        </article>
        <article className="address__content">
          <Button className="save__button" type="primary" htmlType="submit">
            Save
          </Button>
        </article>
      </section>
    </Form>
  );
}

export default RegisterForm;
