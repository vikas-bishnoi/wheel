import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select, Textarea } from "neetoui/formik";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  ASSIGNED_CONTACT_OPTIONS,
  TAG_OPTIONS,
} from "../constants";

const NoteForm = ({ onClose, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      Toastr.success("Note added successfully.");
      onClose();
    } catch (err) {
      Toastr.success("Failed to add note.");
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              className="w-full flex-grow-0"
              label="Title"
              name="title"
              placeholder="Enter note title"
            />
            <Textarea
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
              rows={2}
            />
            <Select
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assigned_contact"
              options={ASSIGNED_CONTACT_OPTIONS}
              placeholder="Select an Option"
            />
            <Select
              isMulti
              isSearchable
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAG_OPTIONS}
              placeholder="Select an Option"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save Changes"}
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
