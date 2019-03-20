from selenium import webdriver
import urllib.request
import time
import os

driver = webdriver.Chrome('C:/Users/Hajin/Downloads/chromedriver_win32/chromedriver.exe')
driver.implicitly_wait(3)
# url에 접근한다.
driver.get('https://twitter.com/kimsohye_com')

for i in range(50):
    # Scroll down to bottom
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(0.5)

cnt = 0

images = driver.find_elements_by_tag_name('img')
for image in images:
    try:
        imageName = str(cnt)+'.png'
        urllib.request.urlretrieve(str(image.get_attribute('src')), imageName)
        size = os.path.getsize(imageName)
        if(size<5*1024):
            os.remove(imageName)
        else:
            cnt+=1
    except:
        print(str(image.get_attribute('src')))
print(cnt)
