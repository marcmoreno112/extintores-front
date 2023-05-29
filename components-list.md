# Extintores App

## Data layer

### Data

- Collection of Extinguishers
  - Extinguisher:
    - id: ObjectId
    - brand: string
    - model: string
    - class: string[]
    - img: string
    - description: string
    - disadvantages: string
    - strenghs: string
    - user: ObjectId
    - fireExtinguishingAgent: string
    - usefulLife: string

### Modifications

- loadExtinguishers()
- loadFilteredExtinguishers()
- loadExtinguisher()
- addExtinguisher()
- removeExtinguisher()
- updateExtinguisher()

## Components

### Store

#### State

- Collection of Extinguishers

#### ExtinguishersReducer

- loadExtinguishers()
- loadFilteredExtinguishers()
- loadExtinguisher()
- addExtinguisher()
- removeExtinguisher()
- updateExtinguisher()

### App

- Receives isLogged
- Shows the title of the app inside a heading
- Shows a navbar with some links depending on isLogged

### ExtinguishersListPage

- Receives an external collection of Extinguishers
- Receives a collection of Extinguishers
- Receives dispatch()
- Renders a ExtinguishersList component
- Renders the spinner while loading and hides it later

### ExtinguisherForm

- State:
  - Extinguisher
- handleSubmit()
- Receives dispatch()
- Receives an optional Extinguisher to update
- Shows an input text for the name of the Extinguisher
- Renders a Button component
  - text: "create" / "modify"
  - actionOnClick: handleSubmit

### ExtinguishersList

- Receives a collection of Extinguishers
- Renders the first 10 ExtinguisherCards of the collection
- Renders a "loadMore" button

### ExtinguisherCard

- Receives a Extinguisher
- Receives dispatch()
- handleClick()
- Shows the Extinguisher's name inside a heading
- Renders a Button with:
  - image: the pencil
  - actionOnClick: handleClick
- Renders a Button with:
  - image: the cross
  - actionOnClick: handleClick

### Button

- Receives a text or image
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

### CreateExtinguisherPage

- Renders a ExtinguisherForm with empty InitialState
- Renders a Button with the text "Create" and the createExtinguisher function onClick

### UpdateExtinguisherPage

- Receives a Extinguisher
- Renders a ExtinguishersForm with the data of the Extinguisher as values of the inputs

### NotFoundPage

- Renders the title
- Renders the image

### Loading

### Modals

### ExtinguisherPage

- Receives a extinguisher
- Renders the extinguisher
