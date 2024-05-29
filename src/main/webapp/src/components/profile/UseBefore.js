import React from 'react';
import styles from './CSS/UseBefor.module.css'

const pastReservations = [
    { id: 1, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruIoN-ElcQp-PnvoCRdtvK8NpQ3-o7YtxW8tIxLCBvzX3Sf9vgtjup9Nmtg&s', title: '예약 1' , reviewWritten: false, period: '2024-01-01 ~ 2024-01-05'},

    { id: 2, imageUrl: 'data:image/jpeg;base64,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', title: '예약 2', reviewWritten: true, period: '2024-01-01 ~ 2024-01-05' },
    { id: 3, imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFRUVFRUWFRUVFxUXFRUVFRUWFxUXFRUYHSggGRolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFw8QFy0dFx8tLS0tLS0tLSstLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0rLSstLSsrLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEoQAAEDAQQGBQkFBQYFBQAAAAEAAhEDBBIhMQUTQVFhcQYigZGhFDJCUrHB0eHwFVNicpIjgrLS8QckM0OTohZzg8LiCERUY8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEBAAICAgIDAAAAAAAAAAARAQISIVETMQNSQWGB/9oADAMBAAIRAxEAPwDtixMWIw01E0l1rhAl1RuIs0kxpJSBCxRNNF6pMaaJAZpKBpI001E01QEaaiaaOLFEsSgAsUSxHmkoGklIBLFEsRppKJpJSAyxRLEWaSiaatIDLFEsRZYoliVIELFEsRZYoliUgQsUSxFFiiaatIFLVEsRRYoliUgUtUS1ElqiWpSBy1RLUQWKBYlIoIUC1XlqiWokUFqYhWlqiWoKyFGFaWqJalFcJKd1JWj1E00xYi7iYsXCu8CatNq0WaajcSpAppqOrRerUSxKkCGmommjCxRLEpAZpqJYjSxRNNWgEsUSxGmmomklIDLFE00UaaiaaVIENNRNNFFiiWpSBDTUDTRhYolitARpKBpo0sUCxKQGaagaaMLFEsSkBmmoFiMLFAsSkCGmoGmjCxRLEpARYoliMLFA007JAZYoFiMNNVuYnYgQsUCxFlirLFexAxaolqILFAtSkU3UlbdSVqR6wWpi1EXFB0DMhcK9EUXUrquLQoGEqRXdTFqmSFBzwP6JSIlqiWp9YPr5pX0qxAsUSxWFyYlKkVFiiWK4lRKVIqLFEsVxUSEpFDqagWKVptdOn59RjPzua32lZ7+ktiGBtlmB/wCfR/mS6kGFigWJrPpGhUxZWpP/AC1GO9hRJppdWBS1QIRLmKDgEup1DlqgWogx9AqF4fQKeTqoc1VkIW09IrIwkOrskZgS4/7QUC/plYvvXdlKt/IrN9DVLVAtWV/xnYvvXD/pVv5FYzpTYnZWlg/NeZ/EAk30Di1QLUrNpGhV/wAOtSf+Sox3sKJdTSkBlqrc1GOYq3MU7EBuYq3NRbmKtzVeyQIWqBaiS1QISnUPdSV0JK9jq9HNcuwMjtHuVFWzk5HvlFssrW5AKerXGu7J8hdPnDxRlOlGYE8AiriV1KRTCUK26muq1IqhNCsupXUpFUJiFYQokJSIQmhPVeGgucQABJJwAAzJJyXKWvS77UP2TnUrMf8ANEtq1x/9Jzp0z955xHmxg5XCNPSOnqdNxptDq1RvnMpiQwwCBUf5rDBBgmYMxC5DSNe0WgnX1306eyhZSaYj8dd0PceUDgtWzWcXbtJradMTswkmTA9IkySd8yVKtRpAQQXHeSR4CFr6SOWbYrDSysVJx31LtQnib5OKLf0uczBjQwDAXQ1sfpWDpnSjS92r6rRgMzMbcTtXP2muYvbCSJ4iCfaF0zixvJ19p6bVj6R7/ms6r0zq+s7vXL0ba1rrzhfG4mBPHNWaRtjXUg5rGsJfGEZAHbA2rXXE7Nmp0yq+u7v+aod0zqeu/v8AmuUdWRdnsF9gdeiZwiciRv4KzGe2t09NKn3j1TaulNWq0s1j4PnZiRtHasG12IsEyCJjipaNs5c4ACSSIAzJOAH1xSYt10GjLOXNdUc5tKkyL1R0wCcmtDRLnmDDQNmzNO7S9mGF60vjaGU6YPEA1HHvQ3SOsLzbMwzTs8twyfWOFapx6wuA+qwbys91iIBPh80G+NI0NXrB5RG0TTkYxjhvjvQ7tM0T6VYc6THf/u1Z+i8b9M5ET39U+4pjYRxUGi+1WZ0S6mZ+8pObnvLWvjvR9BppAmm91MNBJNGs9rQBmSwuGHEtjeucfYcDt4I3RFrdlJvsyO0t2Z5nYfmi46rR/SCu2P2zazdoqNaHRwqUwI5lrl1Nl0pSqRDgCfRO/cDkV5RpDRTZ1lOA1x80eg6Jug7jBI4SPRkgNtNRnmvcO2fas7wzTtHt7wqXA7li9CNL+UULrjL6eBnMg5H64LoHNXHfGx0zyELTtUCES4KtwSrA+O5MroSSpHpZeo31ytTpc30Wd7o9yHr9MDHVpi9vJJbHKAfFc/Lp4dlfTX1wdPpbWBMhhG6CI7j7VJvS2rMkNPCD4GVZpcdwaia+uTd0xbGFIztBcAO+DPchj0vfOFNsbpM9/wAkmlx2Zeoly5yj0spEdZr2ncIcDyOHiAh6/SzHqMgTm4kyOQy7ypNW46q8qLbbGUmOqVHBjGAlznGAAN64zpF0uOpIovayqRiC5stkwHcG54wuR0HZi862oalZ03heD3uc4YipUGJaAfMp+j5x63m7zhus7yzHU6R0g61m/VBZZxjTs7sDV3VLQN26mebscBYKl7rPy2N2nieCyKj6pdOqeeBa4d8wq677U7Kg7vZ7ytz059mvatJ7BgFzXSDTBbTMHF3VHbme6VXWstt/+O89tH+dYulNDW6oRNncAB69HM5/5nJa48Wd5MWtaFtNeKdIA43Wku55lZNXQ9pY4F1BwiCASzGOTsk1qFpcC00iAc4A/mXTfLAGtpF5JIhs7GgDxiSh69qe4AOcSBlKk+x1B6Du6fYqXUXbWu/SfgqIEq1tseGhoMATlniZz7VVcO49xTFFWa1zsHOJGcE/X0V0/R1mqa+07aTf2eX+PUltLtaL9T/prnbFRkicAcZOGA+iuop2lj6LabDkTUfzcbrMNwYyR/zHKKx20VM0jxTVw4uN0mMPNndthQYx0wbzfxAkRzvGCOGHNKkXUG3ajTvJb3j4gIy01CDlmAUBZ698GDJY5hnYets34ArSYDV8xjzE46t4GeyRxRQ2uO4IYgtIf6uJ/L6XhjzAWuNGVfuqn6HfBOdF1IxpvHNpHtCXESoP2HFrsCB34cZgjksi32YtcZx4gQCDkRwI+pWjQouYwB5AdAF2QTIGZjBvI454DbK0NvtA3ZHgcSOU48JO9MXWdom1OpVMHFocLpIJGByxHFbNR5J6xJPHE+Ky/ITvCOqG60FxGWezDmqgqlb6jMG1HAbpMdyIoaerNOLrw3OHvGKyBXacA4HkQk94GZhTri3XVM6TsjFjp2xdI7CSEy5LyhvrDvCSz8fE767XWhMaiwGaY3+EhWt0q071yjq2dYE98LGOlBu8fktnRFUBmuqgBsgMJmB53XI2jqOHCMsQUQZZrBUeJAgH0ndUcxOJ7AVpWbQbTi6r+kYfqd8EHRe+oTUvaxgEgNPnnYC4TA3nNA2mta3bA0bhMDgMEV1FLRdlb51535nx/DCJZWsjMqdLtAce90rgn2e0nM+B+KpdYa+/wPxViPSH6eoxHVjdAjuQ1XTdnIgtYRuLWkd0Lzt1grb/AAPxVT7FW+pVhXoR0vZtlNg/K1rfYqnaVs/qz++/+ZeePslfh3n4LN0jXrUxlzIkgc06pXp9TSlmGJAA2kuMdpJWRaulFimGh9R3q0rzp5HAeK8zFa8b1VznR6OXyHYjGdJnUxdo3KQ/BF48zmVeqV3FR7qmLLEabT6dardnsDY/3LPq0WD/ABK1Jv4WbO0GpK459ptNY5VXk/hdj2uwRugOjVptdZtFgF9xMXjIDWxfe4tkBgnPaSAJkTqI2nWmxtyJefyF3iHNHgqn29h8yk/t1TR/AT4rsK/9mtGxUtbbLeQBspsbTvH1W3i4uPIBeb1LQC43ZuyYkk9WcJx3QrmU1pVKrj6AHN9T3OA8FTAPq9mJ8cUNTdwHcEZTJO9WID0kxpYdY4tmJdBnll4IB2kWUWnV3XOc26XOa2QAIBb+LLfG5T6T0nlzAGuIuwIBMuccQI24DwROhNAVaZFSoSyZ6gOcg+fs7MVNMc1Qo61xkwMzEOM8ASJRo0Q3dVPJnwBXXOaGiLwA5gBDVLXSGdVn62/FFoHR9qrUGXKLKzQTJ/aOZJgCTAGwDuU6mkLU7NjjxdWB98qvSNvpFvVqtJnKagkc2ArPsekw13Wi7ubrHOJ2eeQAOQlAc41zmyn2uJ9gTBlfdRH+ofgoHTzNlN/bA9hKpfp47KXe7/xVQW59RvnVKTf3T73q2gXESKjSDtDMP41i19Kh8S1zI2tcD3hzfeEXYbbSa0nWOJzN/PdAjDsCDWa13rj9BjvvK61PLKRvinUa4gXS0h3Njr3VcBJ3YLJZpxoPmPI/dnulV6V0mKrSGTDQAAcCXPOOHACO0qa1x5TahVddcYDcyJAGImAqHVnbSY5exSfUDXEGTGEyMfBV61mdzvJKy1u4gah3xwu/JJW65nqDw+CSJ/rWukYmMOSlTcTt8PkiTY2+s7vHwS+zwdru8fBYrcF6A0f5RaKdEugOcLxwbDBi4ydsZcYXoOn9G0wWuY0MdTADCB1SGscxocyRMNe4Z7c1w3R7RtLWVb+LfJqxN4AhvmNDshiL0rkhpSo1xaypUYA4i617g3MiAAYhJfpN2Nq3hxst42Zji5zXm0F7L411QVWsuQXAS67mMDJEFQt5eKbf7s1jXPYG1m1KcOg3nDqiBeDTjkBnK5o1m3BhWBN291zdcJnAXcN487GCnrWildAY6vF8F1NzwR5pBcHBoF7ISW5ErUZrp7dVqMovc+hq2uEMrMfMEkAXWg9YnGMsYmBiiDpF7ql1lnIYGhxqGoQxoIkyS4Axtg5gxOE8vWtlAUwKVSueuC+lULTTgA9cFoi8DAGE4nJRbUskl16riIjVtPZe1ogcYPJSLXVMt5qAPp2etUbdwNKpUDSS4ySCZBF0iMduKhUtZN0eTWwEdZwbVqEuAwAAveaTmcMtq52hXo6kh1qrMlxJoU6YLTgAHON5rTgByASsVpaG1P77VpAwA1tMudUAnc4NYBOV7GeCsRuWy2XgGto21jyQXS+pIaCL1xt/rHZJAiVU60tvANo2kk4gVXvYDx/xCYnNY9lt5vPd5XUZIGIpAvfEmIDobjn1sZCkdNVZc+/fc4wXuY0OhsQABgBiTA2kq5ia1KVipsAv0qU7XPIzOJhpbgNwlSNpYImoyASQ1lMhoJwnCZIGEneVg1NKOc6XgO2bo5Rgi7JaqLibwc0ATgJJMiIwO89yqNB+k2+tUdyusHLqQY4FdXovSWktH2d9qp2ajTp1Qw62o6m6pcOFNrKesDoJdMXds5ARzdhstnfPnDAReuy6RIA4xHfjGJGl/az0Ms+ixZhQqV3vrGsXGq9hgU9UAAGNbGNTwS59EYmktMV7XUNSvVdUedrjgBua0YNHABUtpFD6P0s3BrxdPrYXe3crdMWwBtxpBLhLoOTR8cu9aqBK+kSTdYY/FEk/lG7ihKzgfOcXH8TiR4T7FVjdJOG87+HLgoi1AZMHMqauL6NU08abywjHquIPccxwVtW0Orguq1HvdORPVA2Q3IdkLP1gccRHAKdMwYnA+IQV4bkp4KYbCdBXikJVidBVDkrrlakgqEzBVlJnEYYknIcSmGcpg0nqjbieJ+XvKCT6onAzxiPBX2QXnsG9zZ44/EIetZHNEkfLnuT2J917Tue09xB9yDYtOjape5wYYLjGIynDaqjour6h7x8V03Ry3l9EXjiHFs4YjA+0kdi1NeN47li6scL9l1fUPgku613LuSTtpGW0QpgKDXJ5XN1anR0/ta0Y/wBzrbJx11lGRIG0/FedV6ZDzuvSOUrv9FW5lHXOeSC+zVKbDHpufSeJ/wBMrhbTWvPcZBOZyzJn3rfBjkGp2jqtGtqQ2MCOqyDPV62zPIK2tbC4tPlFR0HAuBvNwiQbx5Z7U77PsbaBGwPFUOAGON1pEjgdiP0foOrXa6oK9IimZcXB0DAmSXtE4TsK2yDtlrc4NBtJfDgQS14c0wQHXiJIGUTtyRD7fVux5aw8Lta9+o0fejq3RG1XgL9nmTAljTIAJF0MxwcDHEJndE7WIEUZMxjTxjEwLmKz4XyzKNqeKca+iBJ6r6V6p2u1Ljy62Sqs9V3W69nxzNWmxx5Mv0zA5Ba9Lovax/l0XzBmQT1vNiIGOxZtt0VWpVNXUosvXQ+6SB1SSBEOG0HDNXwB7O89aHWfm5jI/cDmQOwKsAnaDxAgdgACuFhqiTqAeV49118pmsIwcIIzG7njmrjOhHjFWUHRMicFGpmeaent8FUdZ0aoX6tGH+nTwk5dVrgBtxMcB3HtP/Uc79rYh+Cue99H4Lz/AKNW9otFm6pva6i0+rBexk57BOEbc9h9Z/ty6KWq2aivZqetFFtUVGNI1kOLCC1vpeacBJywKzv21/DwZrGnbHNJuE7dii5qS0ytoUi84mGjE7hyRX7KI1eG8k3u8YDxTHqtAG6TxOMTyxUqDb8NO10k7mBknHYB1vBUAWqhdMjFpy+BTMyCvcJBEHeOY+oQ9M4dqirA0mcMlAFWl0Fruw9x+KI0la79whx82CAcO4bUAlw7ip0KDnuDG4ucYAkCTzJhUgrTs2m30mXKTWNG0kFzyd5Mx4IC6fRauczTbzcT/CCra3RkMEvtDG8xA7yQsivpWu/zqr+w3R3NhBOO3adqIvtVEMdAe143skjxCtoGAXbThO4bSPraEE0oqTAHDHkcD7QgtqUoxBBGAPbOHHIoSnT64bxHdPwWo6kbjQGuc7HqwTByk4YQMI3koIUnawAYHI8DiDKGOi0YLlNrZ3kxvkovWHeVmtrxgDgME/lPFSNVoGod6dZ3lBSSJWhf3KYfG0IdpO4+1WtnJc46FaaZewhoJIF7ATAElx5ASexYmltIve2nSfUilTIDRcbDIaQJugE4TnOZWzXPVPVD+EkTviChalvshYQKValUkEOD791wnHG5GBcMN+1XE1zrmAYX2yDlDv5Vu9GNPUbNTqsqEu1hHmDIXSJ60b/BBtawgjyh2OYeyAZzmC7aqHWIH/PokcWPnv1XvW/tnHWt6W2UzLqt0uc4tLWGLwIhsbMTnPgCDqHSqwhtNt+oGscSQaTjImYwMRzBGWAIEcK3R84a2gf3Q095Y0+KIOih99S/Wwe1ynXC67Wj0gsUNGvBDRTb1qNRphjAHYwes7KfVw4rmenlvp2i1MfZ3awaoAwHTIc4xBCyathIwig/8RrNB5ANqgeCrbo922lTdw1mXKKntTMhapFJ5wuOMZw0mOeCdtN5yY7DOGnDnhgrm6Nd9wSNgDjh7ZRFj0U5xg0y0A5ucGhu/Atk9i0yGZQpES7Wh22LkTwkKQsDamFJ5LwMGVIBdHqkYTwWjU0G7Jr6cbJLp7g3BQ+wX/eUwdmL5/hVGE17mnaHNPEOa4HvBBWiekNsP/u7T/r1v5lrWjQ5qwajqV8YF7XwXDZeBbE8UFadEU6QvOJOMQ2rTJ7gwmEhWI50p6YkhG1qdKOqwydpqB3+0MHihKWaC+qQZxMjIbCMQfYD3oux0eq4kOgtAAaDeeDiQ3gYxKjSph4ay48vg3HMu45l1+dgnNH1q9O5TZqi1zQ5rrjg1x2iHAEvkREkgwBm1BlVabh1nNujAAZQNghANwkcUa5jMXMeXDCA4Q/Ik3owPMHHcNgN4T2lTTBJouujA9bEfl2Ht93EJNsL90cynGudkKh/K13/AGhWDRNodjqnfvQD/uKlxvOHLfrFfkkZvYO2U2rpjN5PIfFGM6O2g5ta3m4f9soih0XfIvvaBtuyT2SAFO2NZ+H8m/wy79MZNJ5mFW6qNjB4n4LpH9GaUQHVJ3ktPhAWLpHQtSlJBvtAkuECP3SZ7k7YvL8PLPO4BJ4R3o+xUg5wEEuxiIiAMb24cVmsWpYKxAIvQ2Q5w33Zgd8d61jjozStoY4wGuYAB5pkAgR1mxDssXAzxKaw0vOI9aJ4AfNDVJDwQcRiDlIxvc5R+jWdST6Tifd7ka48bvhI0VE0ESWhRLUrfxaG1ISRF0pJT4tEtUg/gFEn6+aiXcvr5rMZq5r/AKxVNus4qAZEic+MZFPrJ2JzVUHLWsNBwnvKHFTmtXS1kk3m9oy7QsdzCMwR2LWakX3hEzv3Ts+uxQLuKpvK2z3SesYG3OTwVSCKdje4XgMDxA9pSNgq7vFvxRv2iwCAeWGSY6SZhn3KXVmAvIanq+z4qLrJUHonulG/abNx7gmOlG7neHxS6TGcWlNBRj7e0+hPMBVG2N+7H12K1IpAKcSpOtf4GqBtB3N7kpDklWU1QKkq1rlU3Gxo+vUIuNIbT8+q4ASWsMwXZ44ADiqrWC+CcC4NOeTi0uE+HcUJQIcLhJDSRMfDajLRQnMwSS+Qb2DQ1rGlo810l5xjAomBn1Qac3QHYybsTPLt7kW3pAR5rQOUD3LOt9cnDgBhlgNiBU2a3x3c+tjfPSJ31HwUT0hf9R8FhwkApM9Nd+X7a2/+IXpHpA7d7Vi3Uridc9J35ftrZ+3nblCrpouBaQIIIPIrKupXVZ/Sdt9ogwiKFogqm4ldCIPr2xpaANggTjEyTHCSTCnS0oWgAAQAAM9izgE6pnLc+mmNLO3DxT/ap3D67VlpSpMa+Xn7an2odwSWXeSSYvy8/bvXU29ipqUBsUrnLZv9qkaJjM7PrFZZBuZCYsMTvV4GPameOHLv+aAJ1GdqrdQ+QRwppameP1l4IrMdQnA/WSHfo5p/qto0R7c/h2qWoHBQc8dGDefBQOjOJXR+TjM9n19ZJOs4w4fWCqOb+y/xeHzUTow+t4fNdQ2zj6+sVcyyjgUquPOjHbx4qB0e7h4/Bdw2g31R4pnWQH0Y5AJUcObA/gmNgfuXcNsTeGP1u4JOsQww+sNmxKOFNif6vsS8lqer7PiuzfQCqfSCo5EUKnqnw+Kv1laLuMcwt59EbkO+jwVRh+TuOYTizHctV1DdKgaaDO8nO5Lyco4sTXEQHqClqSiriWrVAmpKWqRVxNcQC6tLVoksUTTQDmkmuK+4kWoKI4p7gVhYo3EEdWkpQUkHo9Og3KJx3xgYx8Rs71ZabPdYXEAbAR2SSOR8U6S562zah2eGzeqQceY4p0lUJrAf6Z7Mcd6cUhv34Y70kkDOY0Zk/X19bJPIGzbz2BJJAwpzzy7SfrvSNEkCOPdEpJIJ07IT7RkrWWck4d3sz7EkkFrbPEkn6iQfr+trbPs3Zz4+5JJBE0znewnvknLxVFRpORkYDGczsSSVA9Wmdpy+GGKHLJOB92Iz2JJIip7e9DP3JJKih5I8fmoPzTJIiMqMp0kEU0JJIIpiUklQxcokhOkgiouSSQRJTSnSQNKdJJB//9k=', title: '예약 3', reviewWritten: true, period: '2024-01-01 ~ 2024-01-05' },
];
const navigateToReviewPage = (reservationId) => {
    console.log(`Navigating to the review page: Reservation number ${reservationId}`);
};

const ReservationItem = ({ reservation }) => (
    <div className={styles.reservationItem}>
        <div className={styles.reservationDetail}>
            <img src={reservation.imageUrl} alt={reservation.title} className={styles.reservationImage}></img>
            <h2 className={styles.title}>{reservation.title}</h2>
        </div>
        <div className={styles.actionContainer}>
            <span>{reservation.period}</span>
            <button
                onClick={() => navigateToReviewPage(reservation.id)}
                style={{
                    backgroundColor: reservation.reviewWritten ? 'grey' : '#008EDC', // 후기가 작성되지 않았을 때만 빨간색으로 설정
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    marginRight:'2%',
                    marginBottom:'2%'
                }}
            >
                {reservation.reviewWritten ? '후기 수정' : '후기 쓰기'}
            </button>
        </div>
    </div>
);

const UseBefore = () => (
    <div>
        <h3 style={{textAlign: 'center', marginBottom: '50px'}}>사용 내역</h3>

        <div className={styles.selectContainer}>
            <select className={styles.searchDate}>
                <option> 기간별 검색</option>
                <option>============</option>
                <option>최근 7일</option>
                <option>최근 15일</option>
                <option>최근 30일</option>
            </select>
        </div>


        {pastReservations.map((reservation) => (
            <ReservationItem reservation={reservation} key={reservation.id}/>
        ))}
    </div>
);

export default UseBefore;