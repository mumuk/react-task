import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import onClickOutside from "react-onclickoutside";
import {Field, FieldArray, Form, Formik} from 'formik';
import {changeCurrent} from "../actions/reposActions"

export const ImageTagsEditForm = (props) => {
  const dispatch = useDispatch()
  const {currentItem} = useSelector(state => state.repos)
  const [tags, setTags] = useState(currentItem.tags.split(', '))


  useEffect(() => {
    dispatch(changeCurrent({...currentItem, tags: tags.join(', ')}))
  }, [tags]);


  const handleSubmit = () => {

  }

  ImageTagsEditForm.handleClickOutside = () => {
    props.toggleFormVisible()
  }


  return (
    <div>
      <Formik
        initialValues={{tags}}
        onSubmit={values => {
          setTags(values.tags)
          handleSubmit()
        }
        }
        render={({values}) => (
          <Form
            className={'tag-edit-form'}
          >
            <FieldArray
              name="tags"
              render={arrayHelpers => (
                <div>
                  {values.tags && values.tags.length > 0 ? (
                    values.tags.map((tag, index) => (
                      <div key={index}>
                        <Field name={`tags.${index}`}/>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      {/* show this when user has removed all friends from the list */}
                      Add a tag
                    </button>
                  )}
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => ImageTagsEditForm.handleClickOutside
};


export default onClickOutside(ImageTagsEditForm, clickOutsideConfig)