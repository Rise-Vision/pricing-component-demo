# Pricing Component Demo

This provides an example of all the pricing components working together.

It is a container component that [binds](https://polymer-library.polymer-project.org/3.0/docs/devguide/data-binding) the following components:

 - [pricing-data-component](https://github.com/Rise-Vision/pricing-data-component)
 - [pricing-selector-component](https://github.com/Rise-Vision/pricing-selector-component)
 - [pricing-summary-component](https://github.com/Rise-Vision/pricing-summary-component)
 - [pricing-grid-component](https://github.com/Rise-Vision/pricing-grid-component)


                                    +-----------------------+
                                    |                       | 2.
                        +---------> |        demo           +----------+
                        |           |  container-component  |          |
                        |           |                       +<---+     |
                        |           +-----------+-----------+    |     |
                        |                    4. |                |     |
                     1. |                       |             3. |     v
            +-----------+-----------+           |          +-----+-----+--------------+
            |                       |           |          |                          |
            |                       |           |          |                          |
            |     data-component    |           |          |    selector-component    |
            |                       |           |          |                          |
            |                       |           |          |                          |
            +-----------------------+           |          +--------------------------+
                                                |
                               +----------------+----------------+
                               |                                 |
                               |                                 |
                               |                                 |
                               v                                 v
                  +------------+----------+          +-----------+----------+
                  |                       |          |                      |
                  |                       |          |                      |
                  |  summary-component    |          |    grid-component    |
                  |                       |          |                      |
                  |                       |          |                      |
                  +-----------------------+          +----------------------+

 1. Data flows **UP** from the data component to the enclosing demo component
 2. Data flows **DOWN** from the container into the selector component
 3. Data flows **UP** from the selector component back to the enclosing demo component
 4. Data flows **DOWN** from the container into the summary and grid components
