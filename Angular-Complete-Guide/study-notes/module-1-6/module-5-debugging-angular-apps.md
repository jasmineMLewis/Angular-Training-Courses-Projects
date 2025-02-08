# Table of Contents
1. [Deconstructing Bugs](#deconstructing-bugs)
2. [Using Source Tab](#using-source-tab)
3. [Angular Dev Tools](#angular-dev-tools)

# Module Five Debugging Angular Apps
I have documented my study notes for Module 5: Debugging Angular Apps. I am enrolled in UDemy's software course by Maximilian Schwarzmüller's Angular: The Complete Guide.

Below are a list of topics within the module:
1. Deconstructing Bugs
2. Using Source Tab
3. Angular Dev Tools

# Deconstructing Bugs
Angular attempts to provide as much information as possible to clarify the error.

## Line and File Details
The example states the file, line 13, and column and the code line.

"src/app/app.component.html:13:16" 

## Error Cause
The example needs a string not an object of id and name.

![Image - Error Cause](https://github.com/jasmineMLewis/Angular-Training-Courses-Projects/blob/Production/Angular-Complete-Guide/study-notes/module-1-6/assets/module-5-error-cause.png)


# Using Source Tab
If you receive an error that is not a compile error, using the Source tab in the Developer Browser tools, after pressing F12 can allow you to step through the code from the front end. The Source tab references Source Maps.
 

![Image - Using Source Tab](https://github.com/jasmineMLewis/Angular-Training-Courses-Projects/blob/Production/Angular-Complete-Guide/study-notes/module-1-6/assets/module-5-using-source-tab.png)
 

# Angular Dev Tools
Angular Dev Tools is a Google Chrome Extension.

Navigate to your Google Chrom Web Store and search 'Angular Dev Tools' and add it as an extension.