document.addEventListener('DOMContentLoaded', function () {
    // Set QR code image source (replace with your actual QR code base64 string or URL)
    const qrCodeSrc = "data:image/png;base64,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADp6enBwcE2Njb6+vpTU1P29va9vb2VlZXKysovLy9tbW2jo6NnZ2eMjIx7e3tCQkIcHBxbW1tKSkoODg4hISGFhYWpqang4ODS0tK2trbY2Njw8PCdnZ0WFhYoKCgZ7pvdAAAN8UlEQVR4nO2d6YKyOgyGRwRBcUEREBDw/q/y0ERJTCubzIzfHN5fTG0LzwBdkrR8fc2aNWvWrFmzZs2aNet/L2fjLXsooxKWKpA7cKh+8lxRpUXFNuxEOSVDQtbnvN7GGQBj7X27W35AJTZxnRAV6tA7qt9SUWV2boptKbWImtQQEoJeJ95bQ2BWiz5iV7WEBIDJT+pQwmxuTbGQwVBlZ0jY9jrx6udgYiOM/0/CeGaYf+7OwFv/4jGjO7OiVPfHYJJs80rLlRFmG9QqIQO0N1miEoAL7sytVFVe1d9OrjLDKbKtgFktX544S0bCXF5ncPZGGNCaUnNFEENTDHfGXlINB5U3huNEwOxbWt7LSJjdOJgDXYpnq9uBMIrL9gSMPRhm97swPrsz/zzM/c6oNu5GMF9rlff2szDOVbyCqRHmCq/z6fWduaqmIMmpTSlVQmBsABAmFSe+Om/DWIF9fFJihHGsWq79+s6oDEW6bio750WdYPnqODbCJM/ntQPrbZh0v3hWYIRBGWF8Gli6h6aaUw4JVK8GE4gT79O3Yay3YW5GmBhgzCOAFzDv35n3Ycx35kNhHBDCVKfTYq3DOHcVh+hUi8Oc7qpWHwGzW9fCNtfL8/zCpmwAcwrK9V3lpc6QlwTjQALI+wiYozpMjPUADBP2MxbBaPptmHN/GBwBpDPMx8H4BFN5xhK/DROEYbgqqbCb1sKxB4O51bnCba5+26zqwz0cyincr8MUtSxmWfLOavCRCpjAqrPhcGYLJeDw/GkwUmzazGEULnaaYAPAKYD/8TBk0OiEsT8eht0ZsmJ8Bsw2OnFF2hTAISHMrR7URGmd/uUdK1VEg6mzuusumEScePs+TJGXO65yKWHyy0MlTqp2dYlyBylQYiVgbCix74JZihPnxdswZmnDGVRBOaAGGEA7iYBhaoMx65thzkaYEGCAIJhhZpjXMKX7UoWEqfxaC0v95nTBRCqvfyIYB+pkMMXrM5cjYU7+a0UCJlEX5BzrX2KcabbAhPDvYP3MIfb9W0gwUcuJTyNhOqWNmpkNoA0G7kaLRbNTM8z/CWYvYXwTjIMwjgnGlzByJDgBTHFZ91FOMKEyzHjKDHNYEswejC/wn1mBCQYsOaUHNprm0AsJJu914kvx+trfE+tnWP8Qmv6jMVlnFmhqot+0edqvqKXTlNIMGppF87c1w3wqDDMnsdSjBFGqYDJU/AbMjs4kzWI40GTRCdwNSJaaJYEm0M+sm7+5EZA1zeyGAvgGajAbDAfpEtEFGmH6+TRRctT8AoZ1muAJyeAhNhsMZ5i/DoPDjj39vTHDUPQPwBTJx8C4y8YOg2YXvB6wtdBV3mE8k3XG2SiLy2EcjEVmoFzGGQ6HYfbA6ErZZCOMMMw6Q6NmlOZs6gdzpQ7tPGSg+QKGzhQzGNZpMhjjFACl+Wd6wtBQftCoeYb5bJiSXaD6u2Bn6oRBt60arLlQbCvemUXnCADjh6Bxh8EAe2dGwHxRG7tcRNHiTAR1P1MnaHYzBiMqQNX9TF0sFKkcBnSNGxgUFEMvwHBTkyZPVXEkD/8LI6CEkWLT5laYmwazGO/SMMOcfwxGvzN/DWasf0ZTrqqwGQzaK4bCoElGm7lImBQeMxa2gv8DcMbBO3McAuPCYIS1WNey1oWqcPISUtTQAtqb1U79Gb+Gse7DIJWNnUj5pHL4z9g0WllXUA8fPNXF0Nm0gfMOsc5YYXQ6PXkByMvH/s5UTFIMvVGiUrQQLaaNXZ2qetr8XA9GNUENUUwuP7jDFf3JijnySrphulwaqCs9W5pFU4NRj44vh79s2tymt0bNPWGyITAiFPjjYP6lO3Nx2lXDqHfmDtPnnTm2vDOaKnp9EGbw28Jh7LBdq8RK07SAUZivEvbRaxgMD1qvwvDMFkR9qVRLhi+g8rp2yzs2MGlQF14NN9QM9wIwdXaaK5mcGOp+NTlrWW3xHsykI4BuGHVR0QzTR/iYmW0A08Nk7z9mfqB8QtI7VyXkKgKvEcsgYZxM+ZYy4Tn7ulIQ8K7xIpXwn7EP9WGSChhrp5J36pzLIdYZBrPKHNd1PAETq1Q3U97/KnWfM0gYN4l9P06kT3MdN97wpfPw8t/tcSoOoHAEzBfk2IGbfaRPcwXDzeXiWTdIxU7TEhk0mBYHLYoWb2kRGpoRcGyEBoPR7gykZn8J5h+5M+Ht/jzfQnzMquegDztzH+9MBBVvmtiUmC1sgHfBSurKbnf/jHri9xRugvIcip1RebdFE4Nzh6EMw2EcWk2VwTyokCsn12qN1SFrVmQWYh3X/f+awNosSAVLLSy98mCBFmvR91AZlIBFYbn6e3slmFDVU46MBOymlV4As9g6TSZrYdKRMlxhpsn6GUQeubKpU23Rs0xyZRMqNcKYDRoMZjKDhtQfhOl8zHBlUyZSu2HoMbsaH7MRLg0mcwOAU1FqLLAtsODQbWDiXfbcLFhb0QDgO0MLQqEBCFS7kV1gvscagKUqvH4rdsbcNGNj2TTj/n3bCVs16Sx8Xv2OTfNdsmkGRfajGmyanQTKwXyPNc0sBHKszJ0mSkZotCxsYHIkDJMWPj+BT3MszOuFDX8WZr14qYlhWOwt/G1+Z+5Bv/Bsd8KI8F58Z/BFqZpDGw739M6AMORGu6ieKmAepHTYQSto5UIQ84eWkqWaXx26YM4imO8AY9nbsokEtNUhbmcBk7MDLeHM8RrYRQ2yNTMvtewlQFo/Y96qRS6g09QWcCr7WtZ/DupntCmAGaZz35lJYcY6aP8qzLkFRnvMMNAEYKzpYUZ6m8k8u9puwAYLBOrofpisHubZ9D6JqjOfr8rYeoFOUxWzLsr0Hx3JoAuBz6e9OrYJpjyrE6nKMKIlVgs50R3s0CnAPIvFxuw7owzVqVpz9ghqqA8rtBST4RzvASb4ytgNrSsujYfDpyX0cEMdseYMfkvJc7UlE3l2Vqvyc8r21r4z+L9iERrM7M1sACjjU6VtbmBeDcimbNwGQIZz1ARLG80wzDrzbTBTWWc+4s5MYZ1pHLQPmPoZfsA03qYM3xnyPqllmXElYG6bxsP0ZNGsC1dHcj5ZzQ4U0R6GK/DL4zFrsg2HYa5zhAkvZblbQ8XnS9mo8Yajdsr7neNWOqRToHJ4cpXGBvzu6qc19EnurvGUe9jEqxoTGPQF5Dp/a9qsLQdm0rwAeBE3U96tMAKicGHD0nRibSlN+L51pg3GvBoQRwBS0qKJKlpgplrb/GdhWhZOmWG8T4eJmBaPhGZtcxRVlRmGCshlWhxGjsIeMM9newTP1YfDmmbZYbCt8aBzQeNLSgSbhUloQ5dePoBxzb4/zED9DA6VmQltAp8miziHy27zz/BiFHAqYboNGqDvcNDOMJ8Co/n26TcgwHcGx2ZFCwyFzw+B4dvzvQ/jsq0kzg2M66llCfDiVofd43Cxhl0hYHACff8eysG4ICwfP90j+mhBlJNBihHmSBtOJP7bMEzYNMuFDZowRAsIsOWjvCdqedHypw1nOjUZjJwCtMHItc0g8xQANSTe7CNgtD0BZ5hJYHDryaQfDG4KClMratw5DLwzzEL1wzDdYn2SOcOLQD/K0BlSJ5ec2JP6NLnMy4FJWqcJitm8Xkaco6RL4731M98LY14/M8NMKGkDkHLMg/0hMG+tbBq07cSSQvpKU64DXcTt4DWZmS+dwcC2ExfpBtxClCAUCwbDDIrRZPI7CtjmCbLcEOQ7NmvrlHkj3TYYs6fVvJP2DPP/gOm58RQI40Hs52I22mnABX5jMC753dFJzmBUJGAgYWIIQlFhusXY6NmeW4KBllGDeGg8/l+5ahF8FenrLGn9TFrnvdn37TSaOICz5GQwuaohCxXTxWkyDIL5ru8CgIXq1LkhiLnTHGvQ+FaY7t1NjDCjrTPf9fmJfwmGWT9ZJODm1BD0hGGjoHwimO5NQSUMmGTWRQNzSsh8Q1ZdDca/PJ1nd4FR0BkcWulEMN3btUoYyB+xCA3YsjUoGk+eGWZxEsLW3/p6FJsCpt9GupoRsCXe7AWMUVvqUWaYGQZh2DdJhsDgp0/okA3xEMZVe4pvfhgmSx/SNmxvg4G92zM6XJLv7R5mrkKAzqefhZFjpp4w0NpjhAauyyHnO8JQl/ODMNKgMRZG3hlyf/xTMNnnwvCd5+gRRBgYb7EIjc+AAYMLmHPYBnpos0noqkKK6cXPTySQgHt8Qg39YIKR6zR7wqwqGOSI9e2hCHCCXSXYqHlRQQIMVpLmEzudMFCs+ukPgxi3nmQfBkGxgNNFPxjQR8DYvwzT/Wmwb7gzFLE28Z3p/GgbwASu+mqbhImPzTfZ4HAF7VZqN6kMplIfR/Gxnzk3ZwtS9W23tbiG7UiY7s/pAcxRLazas0YGYLawugtNrrTo04V6AgGDy7QwQ7PyK8vhi5wX8WXP6xDzzFRb6a9hV0O41kSefy1gzNu1aqHAw/Vd3wXgNZi3Bddg3t968g/C9Pxsq9nZxGAwglju32D+bKvUdSqYnh/UPcC7DzBekwH/o7hh+wWWVrLXF2Dgg7oHgoEGAMcprAHAdZoMxhrZAHSqbdq8aGBQ5k8dfxEMCvsZGefNYGB/s7ErmyaDMX6E+gWMDFmdaqeGyWCMnwf/V2F+787se33Zni3Y2MSGDLc1wWTnppjmcDvcHr9VOJw5PtdzYn7dS30ifz9o24mNt+whturRMhXwWKtjUbIWxpw1hfP7JheiHnbtaZ3X24zYGWzWrFmzZs2aNWvWrFl/Tf8BhDuPB86gPMMAAAAASUVORK5CYII=";
    document.getElementById('qrCode').src = qrCodeSrc;

    

    // Handle OTP form submission
    document.getElementById('otpForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const otp = document.getElementById('otpInput').value;

        // Validate OTP with backend (example: fetch API)
        fetch('/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ otp })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('OTP Verified! Redirecting...');
                window.location.href = '/next-page'; // Redirect on successful OTP verification
            } else {
                document.getElementById('error-message').textContent = data.message || 'Invalid OTP. Please try again.';
            }
        })
        .catch(error => console.error('Error:', error));
    });

});
